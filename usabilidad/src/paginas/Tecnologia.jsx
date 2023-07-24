import React, { useEffect, useState } from 'react';
import Card from '../componets/Card';
import axios from 'axios';
import Categorias from '../componets/Categorias';

const Tecnologia = () => {
    const[tecnologia,setTecnologia]=useState([])
    
    useEffect(()=>{
        GetData()
    },[])

    const GetData=()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics")
        .then(res => setTecnologia(res.data))
    }

    return (
        <div className='producto'>
            {
                tecnologia.map((productItem)=>(
                    <Card  key={productItem.id} description={productItem.description} image={productItem.image} price={productItem.price} title={productItem.title}/> 
                ))
            }
        </div>
    );
};

export default Tecnologia;