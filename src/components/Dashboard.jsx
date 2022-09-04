import React from "react";
import ExpenseTable from "./ExpenseTable";
import { Layout, Menu } from "antd";
import AddNewExpense from "./AddNewExpense";

const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <>
      <AddNewExpense />
      <ExpenseTable />
    </>
  );
};

export default Dashboard;
