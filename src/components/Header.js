import React from 'react'
import { Link } from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        
            <header className="main-header">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div>
                        <img src="/phone-logo.svg" alt="phone-catalogue" className='header-img'/>
                    </div> 
                </Link>
                <Link to="/create-phone" style={{ textDecoration: 'none' }}>
                    <div className='add-container'>
                        <img src="/add.svg" alt="add-phone-catalogue" className='header-img add'/>
                    </div>
                </Link>
            </header>
        
    )
}

export default Header