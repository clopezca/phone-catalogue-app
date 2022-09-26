import React from 'react';

const PhoneList = (props) => {
    return (
        <ul>
        {props.phones.map((phone) => (
            <li key={phone.id}>
            <h2>{phone.name}</h2>
            <h3>{phone.manufacturer}</h3>
            <p>{phone.price}</p>
        </li>
        ))}
        </ul>
    );
};

export default PhoneList;