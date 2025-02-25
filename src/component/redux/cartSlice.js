// import React,{useState} from 'react'

// export const CartContext=React.createContext()

// export const CartProvider=({children})=>{
//     const [cartItems,setCartItems]=useState([])


// const addToCart = (item)=>{
//     setCartItems((prevItems) => [...prevItems,item])
// }

// return (

//     <CartContext.Provider value={{cartItems,addToCart}}>
//     {children}
//     </CartContext.Provider>
// )
// }

import {createSlice} from "@reduxjs/toolkit"

const initialState={
    cartItems:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
        state.cartItems.push(action.payload)

          }
          }
});
export const {addToCart}=cartSlice.actions;

export default cartSlice.reducer;
