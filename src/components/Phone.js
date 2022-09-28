import React from 'react';
import { Link } from "react-router-dom";

import './Phone.css'

import Card from '../UI/Card';

const Phone = (props) => {

    const {page, id, image, name, manufacturer, price} = props

    return (
        <Link
            style={{ textDecoration: 'none' }}
            to={`${page}${id}`}
            key={id}
        >
            <Card>
                <div id={id} className='item-body'>
                    <img 
                        src={image} 
                        alt={name}
                        className='phone-img'
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src='/no-photo-available.png';
                            currentTarget.className='phone-img img-default'
                        }}
                        />
                    <div className='item-body_text'>
                        <h2>{name}</h2>
                        <h3>{manufacturer}</h3>
                        <p>{price}€</p>
                    </div>
                </div>
            </Card>
        </Link>    
    );
};

export default Phone;

