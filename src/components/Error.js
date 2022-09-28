import React from 'react'
import './Error.css'

const Error = (props) => {
    const { message } = props
    return (
        <section className='error-container'>
            <h3>{message}</h3>
        </section>
    )
}

export default Error
