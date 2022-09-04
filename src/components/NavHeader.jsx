import React from "react";
import { Layout, Menu } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
const { Header } = Layout;

// https://github.com/auth0/auth0-react/blob/master/examples/cra-react-router/src/Nav.tsx
const NavHeader = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  if (isAuthenticated) {
    const property = `${process.env.AUTH0_AUDIENCE}/user_metadata.user_id`;
  }
  const handleAuthentication = () => {
    isAuthenticated
      ? logout({
          returnTo: window.location.origin,
        })
      : loginWithRedirect();
  };

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['2']}
        items={[
          {
            key: isAuthenticated ? "logout" : "login",
            label: isAuthenticated ? "Logout" : "Login",
          },
        ]}
        onClick={() => {
          handleAuthentication();
        }}
      />
    </Header>
  );
};

export default NavHeader;
