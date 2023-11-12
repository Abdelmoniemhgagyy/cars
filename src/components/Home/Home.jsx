import React from 'react'
import Data from "../../data/data"
import "./Home.css"
import {NavLink} from "react-router-dom"
import {useDispatch } from "react-redux"
import { motion } from "framer-motion"


function Home() {
  const dispatch = useDispatch();

  const addProduct = (book)=>{
    const action = {type:"ADD_TO_CART", product: book , quantity: 1 }
    dispatch(action)
  }
  
  return (
    <div className='home-container'>
    
      <div className="car-items">
      {Data.map((item)=> 
      <motion.div  initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40
      }}
       kay={item.id} className="car-item">
        <div className="car-img">
        <img src={item.image}></img>
        </div>
        <div className="cart-info">
          <h3 className="cart-title">
            {item.title}
          </h3>
          <b>$ {item.price}</b>
          <p>{item.description}</p>
        </div>
        <div className="btn-container">
        <button className='add-btn-cart' onClick={()=>  addProduct(item)}>Add Product</button>
        <button className='cart-btn-detalis'><NavLink to = {`/${item.id}`} > Detalis</NavLink></button>
        </div>
       
       
      </motion.div>)}

      </div>

    </div>
  )
}

export default Home