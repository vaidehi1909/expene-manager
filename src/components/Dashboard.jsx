import React, { useReducer } from "react";
import reducer from './reducer';
import ExpenseTable from "./ExpenseTable";
import ExpenseContext from "./ExpenseContext";

const Dashboard = () => {

    const [expenses, dispatch] = useReducer(reducer, []);
    return (
    <>
       <ExpenseContext.Provider value={{expenses}}>
        <ExpenseTable/>
      </ExpenseContext.Provider>
    </>);


} 

export default Dashboard;