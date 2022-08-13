import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "./components/AuthenticationButton";
import ProtectedRoute from "./auth/protected-route";
import Dashboard from "./components/Dashboard";
import {  Route, Switch, Routes } from "react-router-dom";
// import {  Spin } from 'antd';


export default function App() {
  // const { isLoading } = useAuth0();
  // console.log(isLoading);
  // if (isLoading) {
  //   return (
      
  //     <div className="page-layout">
  //       <Spin />
  //     </div>
  //   );
  // }
    return  (
    <Routes>
      <Route path="/" element={<AuthenticationButton />} />
      <Route path="/dashboard" element={<ProtectedRoute component={<Dashboard/>} />} />
    </Routes> 
    );
}


