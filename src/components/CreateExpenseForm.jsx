import React from "react";
import { Button, DatePicker, Form, Input, Select, InputNumber } from "antd";

const CreateExpenseForm = () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log(values);
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
        name="Title"
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
        label="category"
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
          <Option value="category 1">category 1</Option>
          <Option value="category 2">category 2</Option>
          <Option value="category 3">category 3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="Date"
        label="Date"
        rules={[
          {
            required: true,
            message: "Please Select Date!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="Amount"
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
