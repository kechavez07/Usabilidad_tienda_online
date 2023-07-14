import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';



const Producto = () => {

    const[producsData,setProducsData]=useState([])

    useEffect(()=>{
        GetData()
    },[])

    const GetData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res => setProducsData(res.data))
    }

    return (
        <div className='producto'>
            {
                producsData.map((productItem)=>(
                    <Card  key={productItem.id} description={productItem.description} image={productItem.image} price={productItem.price} title={productItem.title}/>     
                ))
            }
        </div>
    );
};

export default Producto;