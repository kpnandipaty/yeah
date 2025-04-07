import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Customers(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/customer/`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }, []);

    const getcustomer = (url) => {
        return url.split('/').reverse()[1];
    }

    const List = ({data}) => {
        return(
            <div>
                <ul>
                    {data.map(customer => (
                        <li key={customer.url}>
                            <h3>{customer.name}</h3>
                            <p>email : {customer.email} </p>
                            <Link to={`/customers/${getcustomer(customer.url)}`}>View Customer</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return(
        <div>
            <h1>All The Customers</h1>
            {List({data})};
        </div>
    )
}

export default Customers;


