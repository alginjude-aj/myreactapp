import React from "react";
import './Home.css';
import  HomeProduct from './HomeProduct';
import {PRODUCTS} from '../../products';

function Home() {
  return (
      <div className="Shop"> 
        <div className="ShopTitle">
          <h1>NEW TRENDS</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => ( <HomeProduct data={product} />))}
        </div>
      </div>
  );
  }
  

  export default Home;