// src/components/OrderList.jsx
import { useState, useEffect } from 'react';


import PropTypes from 'prop-types';


const OrderList = ({ customerId, onOrderSelect }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (customerId) {
            const fetchedOrders = [
                { id: 101, date: '2021-01-01' },
                { id: 102, date: '2021-01-15' },
                // More orders...
            ];
            setOrders(fetchedOrders);
        }
    }, [customerId]);

    return (
        <div className="order-list">
            <h3>Orders</h3>
            <ul>
                {orders.map(order => (
                    <li key={order.id} onClick={() => onOrderSelect(order.id)}>
                        Order ID: {order.id}, Date: {order.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

OrderList.propTypes = {
    customerId: PropTypes.number,
    onOrderSelect: PropTypes.func.isRequired
};

export default OrderList;
