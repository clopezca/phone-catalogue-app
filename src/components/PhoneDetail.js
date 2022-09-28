import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import getPhoneDetails from '../services/getPhoneDetails'
import Loading from './Loading';
import Error from './Error';
import './PhoneDetail.css'

const PhoneDetail = () => {
    let { id } = useParams();

    const [phone, setPhone] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const {image, name, manufacturer, price, description, color, screen, processor, ram} = phone

    useEffect(() => {
        getPhoneDetails(id)
            .then(response => {
                setPhone(response);
            })
            .catch(error => {
                console.log('Phone error:', error.message)
                setError(error.message)
            });
            setIsLoading(false)
        }, [id]);

    return (
        <>
        {error &&
            <Error message={error} />
        }
        {!error && isLoading &&
            <Loading />
        }
        {!error && !isLoading &&
            <section className='details-container'>
                <section className='image-container'>
                    <img 
                        src={image} 
                        alt={name} 
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src='/no-photo-available.png';
                        }}/>
                </section>
                <section className='info-container'>
                    <h2>{name}</h2>
                    <h3>{manufacturer}</h3>
                    <p>{price}€</p>
                    <p>{description}</p>
                    <hr></hr>
                    <section className='info-sub-container'>
                        <div>
                            <p><strong>Color</strong></p>
                            <p>{color}</p>
                        </div>
                        <div>
                            <p><strong>Screen</strong></p>
                            <p>{screen}</p>
                        </div>
                        <div>
                            <p><strong>Processor</strong></p>
                            <p>{processor}</p>
                        </div>
                        <div>
                            <p><strong>Ram</strong></p>
                            <p>{ram}</p>
                        </div>
                    </section>
                    <section className='actions-container'>
                        <button className='info-action'>Delete</button>
                        <button className='info-action'>Edit</button>
                    </section>
                </section>
            </section>
        }
        </>
    )
}

export default PhoneDetail
