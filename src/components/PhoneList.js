import React from 'react';

import './PhoneList.css'

import Phone from './Phone';

const PhoneList = (props) => {
    return (
        <div className='list'>
        {props.phones.map((phone) => (
            <Phone
                page='/'
                key={phone.id}
                id={phone.id}
                name={phone.name}
                manufacturer={phone.manufacturer}
                price={phone.price}
                image={phone.image}
            />
        ))}
        </div>
    );
};

export default PhoneList;