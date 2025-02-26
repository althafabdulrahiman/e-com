import React, { useContext } from 'react'
// import './Cart.css'
import './Shop.css'

// import { CartContext } from '../CartSlice/cartSlice'
import { useSelector } from 'react-redux'

const Cart = () => {

  // const {cartItems}=useContext(CartContext)
  const cartItems=useSelector((state)=> state.cart.cartItems)


  const data=cartItems.map((item,index)=>(
    
      <li key={index}>
        <img src={item.image} alt=''/>
        <h5>{item.title}</h5>
        <h2>${item.price}</h2>
      </li>
    
  ))

  return (
    <div className='shop'>
        <div className="shop-header">
        <h1 className='align-center'>Cart</h1>
        </div>
        <div className="shop-header1">
        <ul> {data} </ul>
        </div>
     
      </div>
      

    
  )
}

export default Cart