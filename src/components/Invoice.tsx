import React from 'react';

interface InvoiceProps {
    invoice: {
        id: number;
        date: string;
        amount: number;
    };
}

const Invoice: React.FC<InvoiceProps> = ({ invoice }) => {
    return (
        <div>
            <h2>Invoice #{invoice.id}</h2>
            <p>Date: {invoice.date}</p>
            <p>Amount: {invoice.amount} RSD</p>
            {/* Add more fields as necessary */}
        </div>
    );
};

export default Invoice; 