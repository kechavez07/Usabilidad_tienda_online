import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Categorias = () => {
    const navigate = useNavigate()

    return (
        <div className='categorias'>
            <ul className='categoriasList'>
                <li onClick={()=>navigate(`/tecnologia`)}>
                    TECNOLOGIA
                </li>
                <li  onClick={()=>navigate(`/joyeria`)}>
                    JOYERIA
                </li>
                <li  onClick={()=>navigate(`/ropaHombre`)}>ROPA DE HOMBRE</li>
                <li  onClick={()=>navigate(`/ropaMujer`)}>
                    ROPA DE MUJERERS
                </li>
            </ul>
        </div>
    );
};

export default Categorias;
