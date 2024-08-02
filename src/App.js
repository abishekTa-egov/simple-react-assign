import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Form from './Pages/Form';
import Slate from './slate';
import Form1 from './Components/Form1';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { UserContext } from './Contexts/UserContext';
import React, { useCallback, useContext, useState, useEffect } from 'react';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import PrivateRoute from './Components/PrivateRoute';


function App() {
  const { user, setUser } = useContext(UserContext);
  const [isUserLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    console.log("1");
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser("");
      console.log("2");
    }

  },[setUser]);

  console.log("3");



  if (!isUserLoaded) {

    return (
      <Router >
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route element={<PrivateRoute />}> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/form" element={<Form />} />
              <Route path="/users" element={<Users />} />
            {/* </Route> */}
          </Routes>
        </div>
      </Router>
    );
  }

}

export default App;







// <div>
//         {/* <Slate></Slate> */}
//         <Form></Form>
//         {/* <Form1></Form1> */}
//         {/* <Login></Login> */}
// </div>








{/* <Router >
<div className="app">
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<PrivateRoute />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path="/users" element={<Users />} />
    </Route>
  </Routes>
</div>
</Router> */}