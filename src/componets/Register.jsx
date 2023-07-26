import React from 'react';

const Register = () => {
    return (
        <div className='registrar'>
            <div className='registrarCabesera'>
                <img src="src\assets\iconos\onlineShop.png"/>
                <span>REGISTRARSE</span>
            </div>
            <ul className='registrarList'>
                <li>
                    Email
                </li>
                <input type="email" placeholder='Ingrese su email' />
                <li>
                    Usuario
                </li>
                <input type="text" placeholder='Ingrese su usuario' />
                <li>
                    Contraseña
                </li>
                <input type="pasword" placeholder='Ingrese su contraseña' />
            </ul>
            <div className='registrarBoton'>
                <button>Registrarse</button>
            </div>
        </div>
    );
};

export default Register;