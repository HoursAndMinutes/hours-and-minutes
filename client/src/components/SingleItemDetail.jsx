import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './SingleItemDetail.css'

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
        <section id='signleItem-container'>
        <section className='single-item'>
            <p>{singleWatch.name}</p>
            <p>{singleWatch.gender}</p>
            <p>{singleWatch.description}</p>
            <p>{`$${singleWatch.price}`}</p>
            <img src = {`${singleWatch.imageURL}`}/>
            <button onClick={() => addToCart()} id='signle-button'>Add to cart</button>
        </section>
        </section>
    )
}

export default SingleItemDetail