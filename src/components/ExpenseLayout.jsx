import React from "react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "./components/AuthenticationButton";
import ProtectedRoute from "./auth/protected-route";
import Dashboard from "./components/Dashboard";
import {  Layout } from 'antd';
import {  Route, Switch, Routes } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import { Content } from "antd/lib/layout/layout";

const ExpenseLayout = () =>{
    return(


        <Layout>
<NavHeader />
<Content       
className="site-layout"
style={{
padding: '0 50px',
marginTop: 64,
}}>

<div
className="site-layout-background"
        style={{
        padding: 24,
        minHeight: 380,
}}
>
<Routes>
      <Route path="/" element={<AuthenticationButton />} />
      <Route path="/dashboard" element={<Dashboard/>} />
</Routes> 
</div>
</Content>
</Layout>

    );
}

export default ExpenseLayout;