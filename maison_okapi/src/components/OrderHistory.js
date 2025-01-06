import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch order history data (mocked for now)
        fetch('/order-history')
            .then(response => response.json())
            .then(data => setOrders(data.orders));
    }, []);

    return (
        <div className="order-history-container">
            <h2>Your Order History</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.order_id}>
                        {order.item} - ${order.price} - Status: {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;
