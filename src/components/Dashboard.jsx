import React, { useState, useContext, useEffect } from "react";

import ExpenseContext from "./ExpenseContext";
import ExpenseTable from "./ExpenseTable";
import { Layout, Menu } from "antd";
import AddNewExpense from "./AddNewExpense";
import SearchBox from "./SearchBox";
import { getUserId } from "./helper";

const { Header, Content } = Layout;

const Dashboard = () => {
  const { state } = useContext(ExpenseContext);
  const userList = state.expenseList || [];
  const [dataSource, setDataSource] = useState(userList);

  useEffect(() => {
    setDataSource(userList);
  }, [state.expenseList]);

  const search = (value) => {
    if (value === "") return setDataSource(userList);
    setDataSource(
      userList.filter((ul) =>
        ul.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <>
      <SearchBox search={search} />
      <AddNewExpense />
      <ExpenseTable dataSource={dataSource} />
    </>
  );
};

export default Dashboard;
