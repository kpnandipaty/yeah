import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function OrderIndividual() {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState({});
    const [products, setProducts] = useState([]);

    // Order details
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/order/${id}/`)
            .then((response) => response.json())
            .then((data) => setOrder(data))
            .catch((error) => console.error('Error:', error));
    }, [id]);

    // Order items
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/orderitem/?order=${id}`)
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error('Error:', error));
    }, [id]);

    // Products
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/product/`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Order Information</h2>
            <p>Order number: {id}</p>
            <p>Date: {order.date_ordered}</p>
            <p>Address: {order.shipping_addr}</p>

            <h2>Product Information</h2>
            <ul>
                {items.map(item => {
                    const productId = item.product.split('/').reverse()[1];
                    const productDetails = products.find(p => p.url.includes(`/${productId}/`));
                    
                    if (!productDetails) return null;

                    return (
                        <li key={item.url}>
                            <h3>{productDetails.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: €{productDetails.price}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default OrderIndividual;