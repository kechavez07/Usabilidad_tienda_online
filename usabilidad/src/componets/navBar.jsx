import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = (login,setLogin) => {

    const[isLogin,setIsLogin]=useState(false)
    const navigate = useNavigate()


    return (
        <div className='navBar'>
<<<<<<< HEAD
            <div className='logo'> 
                <img src="src\assets\iconos\onlineShop.png" href="src\main.jsx" />
=======
            <div className='logo' onClick={()=>navigate(`/`)}> 
                <img src="src\assets\iconos\onlineShop.png" />
>>>>>>> 128e75131ae98ec43d204370b09349aef0c2c4dc
                <h1>WEB STORE</h1>
            </div>
            <div className='navBar_icon'>
                <div className='search'>
                    <input type="text" placeholder='Buscar'/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='loginAndCart'>
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
<<<<<<< HEAD
                    <i className="fa-regular fa-user" href="src\componets\SobreNosotros.jsx"></i>
=======
                    <i className="fa-regular fa-user" onClick={()=>navigate(`/login`)}></i>
>>>>>>> 128e75131ae98ec43d204370b09349aef0c2c4dc
                </div>
                
            </div>
            
        </div>
    );
};

export default NavBar;