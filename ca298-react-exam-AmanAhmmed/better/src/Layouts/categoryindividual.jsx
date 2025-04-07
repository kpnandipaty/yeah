import {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Categories from './category';

function CategoryIndividual(){
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/product/?category=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);

    const Productlist = ({data}) => {   
        return(
            <div>
                <h2>Products in {id}</h2>
                <ul>
                    {data.map(item => (
                        <li key={item.name}>
                            <h3>{item.name}</h3>
                            <p>€{item.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );

};
    return(
        <div>
            <h1>The {id} Category</h1>
            {Productlist({data})}
        </div>
    )
}
export default CategoryIndividual;