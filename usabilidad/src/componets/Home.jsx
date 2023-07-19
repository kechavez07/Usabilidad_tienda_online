import React from 'react';
import Filter from './Filter';
import Categorias from './Categorias';
import Producto from './Producto';

const Home = () => {
  
  
  return (
    <div>
      <Filter/>
      <div className='shop'>
        <Categorias/>
        <Producto/>
      </div>
    </div>
  );
};

export default Home;