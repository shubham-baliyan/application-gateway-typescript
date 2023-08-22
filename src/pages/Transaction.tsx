import React from "react";
import { MainAppProps } from "../type/MainAppProps";

const Transaction: React.FC<MainAppProps> = ({ mainFunctions }) => {
  console.log(mainFunctions);
  return (
    <div>
      <h1>Transaction</h1>
    </div>
  );
};

export default Transaction;
