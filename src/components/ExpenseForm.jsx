import React, { useContext } from "react";
import ExpenseContext from "./ExpenseContext";
import { Button, DatePicker, Form, Input, Select, InputNumber } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getUserId } from "./helper";
import moment from "moment";
import { DATE_FORMAT } from "./constant";

const ExpenseForm = (props) => {
  let params = useParams();
  const [form] = Form.useForm();
  const { state, action, user } = useContext(ExpenseContext);
  const navigate = useNavigate();
  const userId = getUserId(user);
  const userList = state.expenseList[`${userId}`] || [];
  const initialValue = userList.find(
    (ul) => ul.expense_id === params.expense_id
  );

  //  {
  //   title: "xyz",
  //   category: "category_1",
  //   amount: 23,
  // };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    params.expense_id
      ? action.updateExpense({
          ...values,
          date: values.date.format(DATE_FORMAT),
          user_id: userId,
          expense_id: params.expense_id,
        })
      : action.addExpense({
          ...values,
          date: values.date.format(DATE_FORMAT),
          user_id: userId,
          expense_id: Math.random().toString(16).slice(2),
        });
    navigate("/dashboard");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="Create Expense Form"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 7,
      }}
      initialValues={{
        ...initialValue,
        date: initialValue?.date
          ? moment(initialValue?.date, DATE_FORMAT)
          : moment(),
      }}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your Title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="category"
        label="Category"
        rules={[
          {
            required: true,
            message: "Please Select category!",
          },
        ]}
      >
        <Select
          placeholder="category"
          //   onChange={onGenderChange}
          allowClear
        >
          <Option key="category_1" value="category 1">
            category 1
          </Option>
          <Option key="category_2" value="category 2">
            category 2
          </Option>
          <Option key="category_3" value="category 3">
            category 3
          </Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="date"
        label="Date"
        rules={[
          {
            required: true,
            message: "Please Select Date!",
          },
        ]}
      >
        <DatePicker format={DATE_FORMAT} />
      </Form.Item>

      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
            message: "Please Select Amount!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>

        <Button
          htmlType="button"
          style={{ marginLeft: "6px" }}
          onClick={onReset}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ExpenseForm;
