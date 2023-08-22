// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useRef } from "react";
import { Button, List } from "antd";
// import ConsumeMessages from "../api/ConsumerWebSocket";
import { MainAppProps } from "../type/MainAppProps";
import { transferAssetAsync } from "../app";

const Consumer: React.FC<MainAppProps> = ({ mainFunctions }) => {
  const ws = useRef<WebSocket>();
  // const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    console.log("HI", ws, mainFunctions);
    // if (!ws.current) {
    //   ws.current = ConsumeMessages();
    //   ws.current.onmessage = (message: MessageEvent) => {
    //     console.log("message", message.data);
    //     setMessages([...messages, message.data]);
    //   };
    //   console.log("ws.", ws);
    // }
  }, []);
  const createConnection = async () => {
    await transferAssetAsync(mainFunctions.contract, {
      id: "1",
      owner: "Org2",
    });
    // console.log("sendt message", ws);
    // if (ws.current) {
    //   ws.current.send("get");
    //   console.log("mesgage");
    // }
  };
  return (
    <div>
      <h1>Consumer</h1>
      <Button type="primary" onClick={createConnection}>
        Consume Messages
      </Button>
      <List
        size="small"
        header={<div>Messages</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={messages}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Consumer;
