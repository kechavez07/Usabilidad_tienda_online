import React from 'react';
import { useNavigate } from 'react-router-dom';
const Filter = () => {
    const navigate = useNavigate()

    return (
        <div className='filter'>
            <ul className='lista'>
                <li>
                    Mujer
                </li>
                <li>
                    Hombre
                </li>
                <li>
                    niño
                </li>
            </ul>
                <div className='info'>
                <box-icon name='info-circle'></box-icon>
                <a onClick={()=>navigate('/sobreNosotros')}>Sobre Nosotros</a>
            </div>
        </div>
    );
};

export default Filter;