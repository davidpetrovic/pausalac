import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import InvoiceList from './InvoiceList';

const InvoiceApp = () => {
    const [invoices, setInvoices] = useState([]);
    const [newInvoice, setNewInvoice] = useState({
        date: '',
        currency: 'EUR',
        services: [],
        status: 'poslata',
    });

    const addInvoice = (invoice) => {
        setInvoices([...invoices, invoice]);
        setNewInvoice({ date: '', currency: 'EUR', services: [], status: 'poslata' });
    };

    const markAsPaid = (index) => {
        const updatedInvoices = [...invoices];
        updatedInvoices[index].status = 'uplaceno';
        setInvoices(updatedInvoices);
    };

    return (
        <div>
            <h1>Fakture</h1>
            <InvoiceForm newInvoice={newInvoice} setNewInvoice={setNewInvoice} addInvoice={addInvoice} />
            <h2>Lista faktura</h2>
            <InvoiceList invoices={invoices} markAsPaid={markAsPaid} />
        </div>
    );
};

export default InvoiceApp;
