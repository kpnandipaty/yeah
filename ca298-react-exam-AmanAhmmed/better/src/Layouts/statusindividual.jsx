import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Ordersingle() {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/order/?status=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) =>{
                console.error('Error:', error);
            })
    }, [id]);

    const orderid = (theurl) => {
        /* basically just gets the url of the order and splits it into a list and grabs the last element which is the id*/
        return theurl.split('/').reverse()[1]
    }

    const AllOrders = ({data}) => {
        return(
            <div>
                {data.map(order =>(
                    <div key={order.url}>
                        <h3> order number: {orderid(order.url)}</h3>
                        <p>date: {order.date_ordered}</p>
                        <p>address: {order.shipping_addr}</p>
                        <a href={`/customers/${orderid(order.customer)}`}>View Customer___</a>
                        <a href={`/orders/${orderid(order.url)}`}>View Order</a>

                    </div>
                ))}
            </div>
        )
    }

    return(
        <div>
            <h1>Orders that are under the [ {id} ] status</h1>
            {AllOrders({data})}
        </div>
    )
}

export default Ordersingle;