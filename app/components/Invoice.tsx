import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Invoice = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            const response = await axios.get('/invoices');
            setInvoices(response.data);
        };
        fetchInvoices();
    }, []);

    return (
        <div>
            <h1>Invoices</h1>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice._id}>{invoice.clientName} - ${invoice.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default Invoice; 