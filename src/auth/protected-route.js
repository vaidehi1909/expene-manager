import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import {  Spin } from 'antd';

const ProtectedRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <Spin />
      </div>
    ),
  });

  return <Component />;
};

export default ProtectedRoute;