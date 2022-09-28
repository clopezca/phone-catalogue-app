import React from 'react'

import './Card.css'

const Card = props => {
    return (
        <div className='phone-card'>{props.children}</div>
    )
}

export default Card