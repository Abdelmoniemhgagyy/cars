import React, { useState } from 'react'
import {NavLink, Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
function Navbar() {
  const quantity = useSelector((state)=>  state.cart.map((item)=>  +item.quantity ).reduce((acc,curr)=>acc + curr))
  const dispatch = useDispatch();
  return (
   
<nav>
        <ul className='navbar'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/cart">cart</NavLink></li>
          <li><NavLink to="/carts">carts</NavLink></li>
          <li>  
            <Link to="/cart"><i className="bi bi-cart">  {quantity > 0 ? <span className='cart-number'>{quantity}</span> : ""}
          </i></Link>
          
                
        </li>
        
        </ul>
     
      </nav>
   
  )
}

export default Navbar