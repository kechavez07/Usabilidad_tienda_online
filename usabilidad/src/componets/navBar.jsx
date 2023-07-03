import React from 'react';

const NavBar = () => {
    return (
        <div className='navBar'>
        <nav> 
            <div className='logo'> 
                <img src="src\assets\iconos\onlineShop.png" alt="" />
                <h1>WEB STORE</h1>
            </div>
            <div className='navBar_icon'>
                <input type="text" placeholder='Buscar'/>
                <i class="fa-sharp fa-light fa-cart-shopping"></i>
                <i className="fa-regular fa-user"></i>
            </div>
        </nav>
            
        </div>
    );
};

export default NavBar;