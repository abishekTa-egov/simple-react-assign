import React,{useContext} from 'react'
import { UserContext } from '../Contexts/UserContext'
import {Navigate,Outlet} from "react-router-dom"


const PrivateRoute=()=>{
    const {user}=useContext(UserContext);
    const isLoggedIn=!! user;
    return(
        isLoggedIn ? <Outlet/> : <Navigate to="/login"/>

    );
}

export default PrivateRoute;