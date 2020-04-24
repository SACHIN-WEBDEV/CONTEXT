import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ Transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = Transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={Transaction.amount < 0 ? "minus" : "plus"}>
        {Transaction.text}
        <span>
          {sign} ${Math.abs(Transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(Transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
}
