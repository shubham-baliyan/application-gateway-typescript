import axios from "axios";
import { FieldType } from "../pages/Producer";
export const CreateMessage = async (data: FieldType) => {
  const res = await axios.post("http://127.0.0.1:3000", [data]);
  return res;
};

export const CreateAsset = async (data: FieldType) => {
  const res = await axios.post("http://127.0.0.1:3000/asset", data);
  return res;
};
