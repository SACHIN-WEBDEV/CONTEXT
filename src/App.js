import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { UserProvider } from "./contextApi/UserContext";
import ContextApi from "./components/ContextApi";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <UserProvider>
          <GlobalProvider>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </GlobalProvider>
          <ContextApi></ContextApi>
        </UserProvider>
      </div>
    </div>
  );
}

export default App;
