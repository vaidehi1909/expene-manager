import React from "react";
import { Layout } from "antd";
import NavHeader from "./components/NavHeader";
import ExpenseLayout from "./components/ExpenseLayout";

export default function App() {
  return (
    <Layout>
      <NavHeader />
      <ExpenseLayout />
    </Layout>
  );
}
