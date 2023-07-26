import React from 'react';

const Card = ({description, image, price, title}) => {
    return (
        <div className='card'>
            <div className='ProducImg'>
                <img src={image} />
            </div>
            <div className='pieImg'>
                <span className='title'>{title}</span>
                <div className='precioAndStok'>
                    <span className='priceTitle'>Price: </span><div>${price}</div>
                </div>
            </div> 
        </div>

    );
};

export default Card;