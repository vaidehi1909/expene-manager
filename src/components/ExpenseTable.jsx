import React, { useContext } from "react";
import ExpenseContext from "./ExpenseContext";
import { Table } from "antd";
import { getUserId } from "./helper";

const ExpenseTable = () => {
  const { state, user, action } = useContext(ExpenseContext);
  const userId = getUserId(user);
  const dataSource = state.expenseList[`${userId}`] || [];

  const columns = [
    {
      title: "Sr No.",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "deleteaction",
      render: (_, record) => (
        <a
          onClick={() => {
            action.deleteExpense(userId, record.expense_id);
          }}
        >
          Delete
        </a>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
  // return <div>yo456</div>
};

export default ExpenseTable;

//https://reactjs.org/docs/hooks-reference.html#
//https://codesandbox.io/s/to-do-k1fdz
