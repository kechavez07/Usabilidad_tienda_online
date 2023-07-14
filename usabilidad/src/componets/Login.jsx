import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className='fameloging'>
            <img src="src\assets\iconos\onlineShop.png"/>
            <div className='user'>
                <ul className='userlist'>
                    <li>
                        Usuario
                    </li>
                    <input type="text" placeholder='Ingrese su usuario' />
                    <li>
                        Contraseña
                    </li>
                    <input type="pasword" placeholder='Ingrese su contraseña' />
                </ul> 
            </div>
            <div className='botonIngresarlogin'>
                <button>Ingresar</button>
                <button onClick={()=>navigate(`/Register`)}>Registrarse</button>
            </div>
   
        </div>
    );
};

export default Login;