import React from "react";
import { Button, Form, Input } from "antd";
import CreateMessage from "../api/CreateMessageAPI";
import { MainAppProps } from "../type/MainAppProps";
// import { createAsset } from "../app";
export type FieldType = {
  id?: string;
  value?: string;
};

const Producer: React.FC<MainAppProps> = ({ mainFunctions }) => {
  const onFinish = async (values: FieldType) => {
    console.log("Success:", values, mainFunctions);
    // createAsset();
    const res = await CreateMessage(values);

    console.log(res);
  };

  return (
    <div>
      <Form
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
