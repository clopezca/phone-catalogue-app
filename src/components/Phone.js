import React from 'react';

import './Phone.css'

import Card from '../UI/Card';

const Phone = (props) => {

    const handleSowDetails = (event) => {
        console.log(event.currentTarget.id)
    }

    return (
        <Card>
            <div id={props.id} className='item-body' onClick={handleSowDetails}>
                <img 
                    src={props.image} 
                    alt={props.name}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src='/no-photo-available.png';
                        currentTarget.className='img-default'
                    }}
                    />
                <div className='item-body_text'>
                    <h2>{props.name}</h2>
                    <h3>{props.manufacturer}</h3>
                    <p>{props.price}€</p>
                </div>
            </div>
        </Card>    
    );
};

export default Phone;

