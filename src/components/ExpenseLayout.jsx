import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import * as actions from "./constant";
import reducer, { initialState } from "./reducer";
import ExpenseContext from "./ExpenseContext";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserId } from "./helper";
import useReducer from "../hooks/useReducer";

const { Content } = Layout;

const ExpenseLayout = () => {
  const { isAuthenticated, user } = useAuth0();
  if (!isAuthenticated) return <div />;
  const userId = getUserId(user);
  const [state, dispatch] = useReducer(reducer, userId, initialState);

  const action = {
    addExpense: (newExpense) =>
      dispatch({ type: actions.ACTION_ADD_EXPENSE, payload: newExpense }),
    deleteExpense: (expense_id) => {
      dispatch({
        type: actions.ACTION_DELETE_EXPENSE,
        payload: { expense_id },
      });
    },
    updateExpense: (updatedExpense) => {
      dispatch({
        type: actions.ACTION_UPDATE_EXPENSE,
        payload: updatedExpense,
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
            <Route path="/expense/new" element={<ExpenseForm />} />
            <Route
              path="/expense/:expense_id/update"
              element={<ExpenseForm />}
            />
          </Routes>
        </ExpenseContext.Provider>
      </div>
    </Content>
  );
};

export default ExpenseLayout;
