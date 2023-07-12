import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = (login,setLogin) => {

    const[isLogin,setIsLogin]=useState(false)
    const navigate = useNavigate()


    return (
        <div className='navBar'>
            <div className='logo' onClick={()=>navigate(`/`)}> 
                <img src="src\assets\iconos\onlineShop.png" />
                <h1>WEB STORE</h1>
            </div>
            <div className='navBar_icon'>
                <div className='search'>
                    <input type="text" placeholder='Buscar'/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='loginAndCart'>
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-user" onClick={()=>navigate(`/login`)}></i>
                </div>
                
            </div>
            
        </div>
    );
};

export default NavBar;