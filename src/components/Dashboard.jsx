import React, { useReducer } from "react";
import reducer from './reducer';
import ExpenseTable from "./ExpenseTable";
import ExpenseContext from "./ExpenseContext";
import {  Layout, Menu } from 'antd';
import AddNewExpens from "./AddNewExpens";
import CreateExpenseForm from "./CreateExpenseForm";
const { Header, Content } = Layout;

const Dashboard = () => {

    const [expenses, dispatch] = useReducer(reducer, []);
    return (
  
    
       <ExpenseContext.Provider value={{expenses}}>
        <AddNewExpens/>
        <ExpenseTable/>
      </ExpenseContext.Provider>
  

);} 

export default Dashboard;