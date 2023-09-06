import React from "react";

import { Button, Form, Input, message } from "antd";
import { CreateAsset } from "../api/CreateMessageAPI";
import { CreateMessage } from "../api/CreateMessageAPI";
export type FieldType = {
  id?: string;
  value?: string;
};

const Producer: React.FC = () => {
  const [form] = Form.useForm();
  const [messageApi] = message.useMessage();
  const onFinish = async (values: FieldType) => {
    console.log("Success:", values);
    form.resetFields();
    const res = await CreateAsset(values);

    const anotherRes = await CreateMessage(values);
    // console.log(res, anotherRes);
    console.log("another", anotherRes, res);
    messageApi.success("Message Produced Successfully");
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Id"
          name="id"
          rules={[{ required: true, message: "Please input id!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Value"
          name="value"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Producer;
