import React from 'react'
import "./Cart.css"
import { useSelector} from 'react-redux'
function Cart() {
  const data = useSelector((state)=> state.cart)
 const total = useSelector((state)=> 

  state.cart.map((item)=> +item.product.price * +item.quantity).reduce((acc,curr)=>acc + curr,0)
)
  return (
     <div className="car-items">
    { data.filter(item => item.product.id>0).map((item)=> 
    <div kay={item.product.id} className="car-item">
      <div className="car-img">
      <img src={item.product.image}></img>
      </div>
      <div className="cart-info">
        <h3 className="cart-title">
          {item.product.title}
        </h3>
        <h4>quantity : {item.quantity} </h4>
        <b>$ {item.product.price}</b>
      </div>
      <button className='cart-btn-delete'>delete</button>
      
    </div>
    
    )}
    <div className='total-cart'>Total : ${total}</div>
    </div>
  )
}

export default Cart