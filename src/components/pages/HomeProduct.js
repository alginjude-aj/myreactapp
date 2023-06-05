import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
import './Home.css';
import { ShopContext } from '../../context/Home-Context';

const HomeProduct = (props) => {
    const { id ,productName , productImage ,price } = props.data;
    const{ addToCart} = useContext(ShopContext);
    return (
        <div className='product'>
            <img src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p> Rs.{price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}> Add To Cart </button>
        </div >
  );
}

export default HomeProduct; 
