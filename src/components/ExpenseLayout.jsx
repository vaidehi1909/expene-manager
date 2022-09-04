import React, { useReducer, useState } from "react";
import Dashboard from "./Dashboard";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import CreateExpenseForm from "./CreateExpenseForm";
import CreateExpenseForm from "./CreateExpenseForm";
import * as actions from "./constant";
import reducer, { initialState } from "./reducer";
import ExpenseContext from "./ExpenseContext";
import { useAuth0 } from "@auth0/auth0-react";

const { Content } = Layout;

const ExpenseLayout = () => {
  const { isAuthenticated, user } = useAuth0();
  if (!isAuthenticated) return <div />;
  const [state, dispatch] = useReducer(reducer, initialState);

  const action = {
    addExpense: (newExpense) =>
      dispatch({ type: actions.ACTION_ADD_EXPENSE, payload: newExpense }),
    deleteExpense: (user_id, expense_id) => {
      dispatch({
        type: actions.ACTION_DELETE_EXPENSE,
        payload: { user_id, expense_id },
      });
    },
  };

  return (
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
        marginTop: 64,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <ExpenseContext.Provider value={{ state, action, user }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expense/new" element={<CreateExpenseForm />} />
          </Routes>
        </ExpenseContext.Provider>
      </div>
    </Content>
  );
};

export default ExpenseLayout;
