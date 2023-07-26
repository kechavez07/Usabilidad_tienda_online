import React, { useEffect, useState } from 'react';
import Card from '../componets/Card';
import axios from 'axios';
import Categorias from '../componets/Categorias';

const RopaMujer = () => {
    const[ropaMujer,setRopaMujer]=useState([])
    
    useEffect(()=>{
        GetData()
    },[])

    const GetData=()=>{
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
        .then(res => setRopaMujer(res.data))
    }

    return (
        <div className='producto'>
            {
                ropaMujer.map((productItem)=>(
                    <Card  key={productItem.id} description={productItem.description} image={productItem.image} price={productItem.price} title={productItem.title}/> 
                ))
            }
        </div>
    );
};

export default RopaMujer;