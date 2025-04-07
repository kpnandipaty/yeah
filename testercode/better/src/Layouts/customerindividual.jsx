import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

function CustomerIndividual() {
    const {id} = useParams();
    const [orders, setOrders] = useState([]);
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/customer/${id}/`)
            .then((response) => response.json())
            .then((data) => setCustomer(data))
            .catch((error) => console.error('Error:', error));
    }, [id]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/order/?customer=${id}`)
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error('Error:', error));
    }, [id]);

    const getOrderId = (url) => {
        return url.split('/').reverse()[1];
    };

    const CustomerOrders = ({orders}) => {
        return (
            <div>
                <ul>
                    {orders.map(order => (
                        <li key={order.url}>
                            <p>Order No: {getOrderId(order.url)}</p>
                            <p>Order date: {order.date_ordered}</p>
                            <Link to={`/orders/${getOrderId(order.url)}`}>View Order</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div>
            <h1>{customer.name}'s Orders</h1>
            <CustomerOrders orders={orders} />
        </div>
    );
}

export default CustomerIndividual;