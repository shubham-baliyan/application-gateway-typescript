// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useRef } from "react";
import { Button, List } from "antd";
import { TransferAsset } from "../api/ConsumerWebSocket";
// import ConsumeMessages from "../api/ConsumerWebSocket";

const Consumer: React.FC = () => {
  const ws = useRef<WebSocket>();
  // const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
//    console.log("HI", ws, mainFunctions);
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
    const res = await TransferAsset();
    console.log(res);
    // await transferAssetAsync(mainFunctions.contract, {
    //   id: "1",
    //   owner: "Org2",
    // });
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
    </div>
  );
};

export default Consumer;
