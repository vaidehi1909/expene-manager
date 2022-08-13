import React, { useState } from "react";

import { Button, Checkbox, Form, Input } from 'antd';


const Login = () => {
    [success, setSuccess] = useState(false);
    [userName, setUserName] = useState('');
    const onFinish = (values) => {
        console.log('Success:', values);

        if (values.password == values.username) {
            setUserName(values.username)
            setSuccess(true);
        }
        /// yo bubu console.log("edferf");       .         .         .           .           .          .          .         .    

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            {success ? <h1 style={{ textAlign: 'center' }}> {`Welcome ${userName}`}</h1> : <h1 style={{ textAlign: 'center' }}> Login</h1>}

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
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
                </Form.Item>
            </Form>
        </>
    );


}
export default Login;