import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Categories(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/category/`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [])


    const List = ({data}) => {
        return(
            <div>
                <h1>All Categories</h1>
                <ul>
                {data.map(item => (
                        <li key={item.shortcode}>
                            <h3>{item.display_name}</h3>
                            <a href={`/category/${item.shortcode}`}>View Products</a>
                        </li>
                    ))}
                </ul>
            </div>

        
        );
    };

    return (
        <div>
            {List({data})};
        </div>
    );
}

export default Categories;