import axios from "axios";

export const ConsumeMessages = () => {
  const ws = new WebSocket("wss://consumer.shubhamb.dev/");

  ws.onopen = function () {
    console.log("WebSocket connection established");
  };
  ws.onerror = function (event: Event) {
    console.log("ws Error: ", event);
  };

  ws.onclose = function (event: Event) {
    console.log("ws closed: ", event);
  };
  return ws;
};

export const TransferAsset = async (data: { id: string; owner: string }) => {
  const res = await axios.put("https://fabric.shubhamb.dev/asset", data);
  return res;
};
