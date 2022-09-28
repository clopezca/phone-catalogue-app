import React from 'react'
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Loading.css'

const Loading = () => {
    return (
        <div className='spinner-container'>
            <Spinner 
                color='dark' 
                style={{
                    height: '3rem',
                    width: '3rem'
                }}
            />
        </div>
    )
}

export default Loading
