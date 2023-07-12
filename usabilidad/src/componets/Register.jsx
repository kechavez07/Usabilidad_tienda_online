import React from 'react';

const Register = () => {
    return (
        <div>
            <div className='user'>
                <input type="email" placeholder='Ingrese su email' />
                <input type="text" placeholder='Ingrese su usuario' />
                <input type="pasword" placeholder='Ingrese su contraseña' />
            </div>
            <div>
                <button>Registrarse</button>
            </div>
        </div>
    );
};

export default Register;