import axios from "axios";
import { FieldType } from "../pages/Producer";
export const CreateMessage = async (data: FieldType) => {
  const res = await axios.post("https://producer.shubhamb.dev/", [data]);
  return res;
};

export const CreateAsset = async (data: FieldType) => {
  const res = await axios.post("https://fabric.shubhamb.dev/asset", data);
  return res;
};
