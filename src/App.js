import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInvoice } from "./redux/invoiceSlice";
import InvoiceList from "./components/InvoiceList";
import InvoiceForm from "./components/InvoiceForm";

const App = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices);

  const handleAddInvoice = (invoice) => {
    dispatch(addInvoice(invoice));
  };

  return (
    <div>
      <h1>Invoicing App</h1>
      <InvoiceForm onSubmit={handleAddInvoice} />
      <InvoiceList invoices={invoices} />
    </div>
  );
};

export default App;
