import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const username = localStorage.getItem('username');

        if (!token || !username) {
            setError('User not authenticated. Please sign in.');
            setLoading(false);
            return;
        }

        fetch(`/api/order-history?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch order history');
                }
                return response.json();
            })
            .then(data => {
                setOrders(data.orders || []);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching order history:', err);
                setError('Could not load order history.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="order-history-container">
            <h2>Your Order History</h2>

            {loading && <p>Loading order history...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && orders.length === 0 && <p>No past orders found.</p>}

            <ul>
                {orders.map((order) => (
                    <li key={order.order_id}>
                        {order.item} - ${order.price.toFixed(2)} - <strong>Status:</strong> {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
