import React from 'react';
import Invoice from './Invoice';

interface InvoiceListProps {
    invoices: {
        id: number;
        date: string;
        amount: number;
    }[];
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
    return (
        <div>
            {invoices.map(invoice => (
                <Invoice key={invoice.id} invoice={invoice} />
            ))}
        </div>
    );
};

export default InvoiceList; 