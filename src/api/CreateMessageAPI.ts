import axios from "axios";
import { FieldType } from "../pages/Producer";
const CreateMessage = async (data: FieldType) => {
  const res = await axios.post("http://127.0.0.1:3000", [data]);
  return res;
};

export default CreateMessage;
