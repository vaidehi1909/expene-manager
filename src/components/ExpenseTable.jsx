import React, { useContext } from "react";
// import ExpenseContext from "./ExpenseContext";
import { Table } from 'antd';

const ExpenseTable = () => {
// const {expenses} = useContext(ExpenseContext);

const dataSource = [
    {
      key: '1',
      title: 'Mike',
      category: 32,
      amount: '10 Downing Street',
      date: '10/09/2000'
    },
    {
      key: '2',
      title: 'John',
      category: 42,
      amount: '10 Downing Street',
      date:'22/08/2001'
    },
];
  
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];
  
return <><Table dataSource={dataSource} columns={columns} /></>;
// return <div>yo456</div>


}

export default ExpenseTable;

//https://reactjs.org/docs/hooks-reference.html#
//https://codesandbox.io/s/to-do-k1fdz





