import React from 'react';

const Card = () => {
    return (
        <div className='card'>
            <div className='ProducImg'>
                <img src="../src/assets/iconos/camisa_prueba.jpg" />
            </div>
            <div className='pieImg'>
                <div className='precioAndStok'>
                    <div>precio</div>
                    <span>stock</span>
                </div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi fuga quae possimu
                </span>
            
            </div> 
        </div>

    );
};

export default Card;