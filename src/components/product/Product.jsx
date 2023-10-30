import React from 'react'
import "./Product.css"
import data from "../../data/data"
import {useParams} from "react-router-dom"
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
function Product() {
  const dispatch = useDispatch();

const addProduct = (book)=>{
  const action = {type:"ADD_TO_CART", product: book , quantity: quan }
  dispatch(action)
}





    const { id } = useParams();
    const book=data.find(b => b.id === +id)
const [quan,setQuan]=useState(1)
    const handelForm = (e)=>{
      e.preventDefault()
    }
  return (
    <div className='cart-page'>
      <div className="left-image">
      <img src={book.image} />
      </div>
      
        <div className="cart-page-info">
          <h3 className="cart-page-title">
            {book.title}
          </h3>
         Price :  <b>$ {book.price}</b>
        <form className='cart-page-form' onSubmit={handelForm}>
          <input type="number" value={quan} onChange={(e)=>setQuan(e.target.value)} min={1} />
          <button className='add-btn-cart' onClick={() => addProduct(book)}>Add To Cart</button>
        </form>
        <p>Total Price : <b>{+quan * book.price}</b></p>
        </div>
        
     
    </div>
  )
}

export default Product