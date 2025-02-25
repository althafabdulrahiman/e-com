import React, { useContext } from 'react'
import './Popup.css'
// import { CartContext } from '../CartSlice/cartSlice';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const Popup = ({off,image,title,price}) => {

  // const {addToCart}=useContext(CartContext)

  const dispatch=useDispatch();

    console.log("props image:",image);
    console.log("props title:",title);
    console.log("props true:",off);

    const order =()=>{
     dispatch(addToCart({image,title,price}))
     alert("added to cart")
     off()
    }   


  return (
    <div className='popup'>
        <div className="popup-content">
        <h5 className='popup-close' onClick={off}>close</h5>
        <img src={image} alt=''/>
        <h3>{title}</h3>
        <h2>${price}</h2>
        <button onClick={order}>Buy Now</button>
        
        </div>
        
        </div>
  )
}

export default Popup