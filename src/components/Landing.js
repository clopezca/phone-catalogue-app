import React, {useEffect, useState} from 'react';
import getAllPhones from '../services/getAllPhones';
import PhoneList from './PhoneList';
import Loading from './Loading';
import Error from './Error';
import './Landing.css'

const Landing = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [phones, setPhones] = useState ([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllPhones()
            .then(response => {
                setPhones(response);
            })
            .catch(error => {
                console.log('Phone error:', error.message)
                setError(error.message)
            });
            setIsLoading(false);
        }, []);

        
    return (
        <>
            {error && phones.length < 1 &&
                <Error message={error} />
            }
            {!error && isLoading &&
                <Loading />
            }
            {!error && !isLoading && phones.length < 1 &&
                <section className='error-container'>
                    <h3>No devices on catalogue</h3>
                </section>
            }
            {!error && !isLoading && 
                <section className='catalogue-container'>
                    <PhoneList phones={phones} />
                </section>
            } 
        </>
            
    );
}

export default Landing;