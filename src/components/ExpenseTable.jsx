import React, { useContext } from "react";
import ExpenseContext from "./ExpenseContext";
import moment from "moment";
import { Table, Space, Divider, DatePicker, Button, InputNumber } from "antd";
import { getUserId } from "./helper";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { DATE_FORMAT } from "./constant";
const { RangePicker } = DatePicker;

const ExpenseTable = (props) => {
  const { user, action } = useContext(ExpenseContext);
  const userId = getUserId(user);
  const dataSource = props.dataSource || [];

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
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Space>
            <InputNumber
              onChange={(e) => {
                selectedKeys.length
                  ? setSelectedKeys([{ ...selectedKeys[0], min: e }])
                  : setSelectedKeys([...selectedKeys, { min: e }]);
              }}
            />
            <InputNumber
              onChange={(e) => {
                selectedKeys.length
                  ? setSelectedKeys([{ ...selectedKeys[0], max: e }])
                  : setSelectedKeys([...selectedKeys, { max: e }]);
              }}
            />
          </Space>
          <Space>
            <Button
              onClick={() => {
                clearFilters();
                confirm();
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm();
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),

      onFilter: (value, record) => {
        return record.amount >= value.min && record.amount <= value.max;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Space>
            <RangePicker
              format={DATE_FORMAT}
              onChange={(e) => {
                setSelectedKeys([e]);
              }}
              allowClear={true}
            />
          </Space>
          <Space>
            <Button
              onClick={() => {
                clearFilters();
                confirm();
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm();
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),

      onFilter: (value, record) => {
        return moment(record.date, DATE_FORMAT).isBetween(
          value[0],
          value[1],
          "days",
          "[]"
        );
      },
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
              action.deleteExpense(record.expense_id);
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
