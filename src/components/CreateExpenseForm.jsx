import React, { useContext } from "react";
import ExpenseContext from "./ExpenseContext";
import { Button, DatePicker, Form, Input, Select, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { getUserId } from "./helper";

const CreateExpenseForm = () => {
  const [form] = Form.useForm();
  const { action, user } = useContext(ExpenseContext);
  const navigate = useNavigate();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    action.addExpense({
      ...values,
      date: values.date.format("DD/MM/YY"),
      user_id: getUserId(user),
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
        remember: true,
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
        <DatePicker format="DD/MM/YY" />
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

export default CreateExpenseForm;
