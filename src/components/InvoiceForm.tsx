import React, { useState } from 'react';

interface InvoiceFormProps {
    onSubmit: (invoice: { amount: string; date: string }) => void;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onSubmit }) => {
    const [amount, setAmount] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ amount, date });
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount in RSD"
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">Create Invoice</button>
        </form>
    );
};

export default InvoiceForm; 