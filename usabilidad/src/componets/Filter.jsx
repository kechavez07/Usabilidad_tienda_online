import React from 'react';
import { useNavigate } from 'react-router-dom';
const Filter = () => {
    const navigate = useNavigate()

    return (
        <div className='filter'>
            <ul className='lista'>
                <li onClick={()=>navigate(`/tecnologia`)}>
                    TECNOLOGIA
                </li>
                <li  onClick={()=>navigate(`/joyeria`)}>
                    JOYERIA
                </li>
                <li  onClick={()=>navigate(`/ropaHombre`)}>ROPA DE HOMBRE</li>
                <li  onClick={()=>navigate(`/ropaMujer`)}>
                    ROPA DE MUJER
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