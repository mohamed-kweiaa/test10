import React from 'react';
import "../styles/Header.css";


const Header = () => {
    return (
        <header className='main-header'>
            <div className='logo'>
                <img src="/imgs/logo.png" alt="logo" />
            </div>
            <nav>
                <ul>
                    <li> item 1</li>
                    <li> item 2</li>
                    <li> item 3</li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Header;