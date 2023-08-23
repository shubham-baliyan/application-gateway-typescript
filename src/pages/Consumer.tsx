import React, { useEffect, useRef, useState } from "react";
import { Button, List } from "antd";
// import { TransferAsset } from "../api/ConsumerWebSocket";
import { ConsumeMessages, TransferAsset } from "../api/ConsumerWebSocket";

const Consumer: React.FC = () => {
  const ws = useRef<WebSocket>();
  const [messages, setMessages] = useState<string[]>([]);
  async function call(data: { id: string; owner: string }) {
    const res = await TransferAsset(data);
    console.log("res", res);
  }
  useEffect(() => {
    //    console.log("HI", ws, mainFunctions);
    if (!ws.current) {
      ws.current = ConsumeMessages();
      ws.current.onmessage = (message: MessageEvent) => {
        console.log("message", message.data);
        const data = JSON.parse(message.data);
        setMessages((messages) => [...messages, message.data]);
        call({ id: data.id, owner: "Org2" });
      };
      console.log("ws.", ws);
    }
  }, []);
  console.log("messages", messages);
  const createConnection = async () => {
    // const res = await TransferAsset();
    // console.log(res);
    // await transferAssetAsync(mainFunctions.contract, {
    //   id: "1",
    //   owner: "Org2",
    // });
    console.log("sendt message", ws);
    if (ws.current) {
      ws.current.send("get");
      console.log("mesgage");
    }
  };
  return (
    <div>
      <h1>Consumer</h1>
      <Button type="primary" onClick={createConnection}>
        Consume Messages
      </Button>
      <List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={messages}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Consumer;
