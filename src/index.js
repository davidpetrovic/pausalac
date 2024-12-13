import React from "react";
import ReactDOM from "react-dom/client";
import InvoiceList from "./components/InvoiceList";

const invoices = [
  { id: 1, amount: 100, date: "2023-01-01" },
  { id: 2, amount: 200, date: "2023-01-02" },
  { id: 3, amount: 300, date: "2023-01-03" },
];

const App = () => {
  return (
    <div>
      <h1>Invoice List</h1>
      <InvoiceList invoices={invoices} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
