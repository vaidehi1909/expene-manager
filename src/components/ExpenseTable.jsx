import React, { useContext } from "react";
import ExpenseContext from "./ExpenseContext";
import { Table, Space, Divider } from "antd";
import { getUserId } from "./helper";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ExpenseTable = () => {
  const { state, user, action } = useContext(ExpenseContext);
  const userId = getUserId(user);
  const dataSource = state.expenseList[`${userId}`] || [];

  const navigate = useNavigate();

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
      key: "action",
      render: (_, record) => (
        <Space split={<Divider type="vertical" />}>
          <a
            onClick={() => {
              navigate(`/expense/${record.expense_id}/update`);
            }}
          >
            <EditOutlined />
          </a>

          <a
            onClick={() => {
              action.deleteExpense(userId, record.expense_id);
            }}
          >
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default ExpenseTable;
