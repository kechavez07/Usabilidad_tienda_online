import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';



const Producto = () => {
    const[producsData,setProducsData]=useState({})

    useEffect(()=>{
        GetData()
        console.log(producsData)
    },[])

    const GetData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res => setProducsData(res.data))
    }

    return (
        <div className='producto'>
            {
                producsData.map((producItem)=>(
                    <Card price={ producItem.price} description = { producItem.description} image = {producItem.image} title = {producItem.title} />
                ))
            }
        </div>
    );
};

export default Producto;