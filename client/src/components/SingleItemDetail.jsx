import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleItemDetail = () => {
    const [singleWatch, setSingleWatch] = useState('');
    const [searchParams] = useSearchParams();
    //TO DO: make it look nice

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch(`/api/watches/${searchParams.get('watchId')}`);
            const data = await response.json();
            setSingleWatch(data);
        }
        fetchAPI();
    }, []);

    const addToCart = () => {
        alert(`Added ${singleWatch.name} to cart`);
    }

    return (
        <section>
            <img />
            <p>{singleWatch.name}</p>
            <p>{singleWatch.gender}</p>
            <p>{singleWatch.description}</p>
            <p>{`$${singleWatch.price}`}</p>
            <img src = {`${singleWatch.imageURL}`}/>
            <button onClick={() => addToCart()}>Add to cart</button>
        </section>
    )
}

export default SingleItemDetail