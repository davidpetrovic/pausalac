import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Import the Supabase client
import Invoice from './Invoice';

const InvoiceList: React.FC = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            const { data, error } = await supabase
                .from('invoices')
                .select('*');

            if (error) {
                console.error('Error fetching invoices:', error);
            } else {
                setInvoices(data);
            }
        };

        fetchInvoices();
    }, []);

    return (
        <div>
            {invoices.map(invoice => (
                <Invoice key={invoice.id} invoice={invoice} />
            ))}
        </div>
    );
};

export default InvoiceList; 