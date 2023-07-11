import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='user'>
                <input type="text" placeholder='Ingrese su usuario' />
                <input type="pasword" placeholder='Ingrese su contraseña' />
            </div>
            <div>
                <button>Ingresar</button>
                <button onClick={()=>navigate(`/Register`)}>Registrarse</button>
            </div>

        </div>
    );
};

export default Login;