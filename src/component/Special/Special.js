import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Popup from '../Popup/Popup'
import Loading from '../Loading/Loading'
import "../Router/Shop.css"

import { AllMenuContext } from '../Router/Shop'

const Special = () => {

    
    const [items,setItems]=useState([])
    const [loading,setLoading]=useState(true)
    const [pop,setPop]=useState(false)
    const [image,setImage]=useState("")
    const [title,setTitle]=useState("")
    const [price,setPrice]=useState("")
    
    const allMenus=useContext(AllMenuContext)
    
    

    const getItems= async()=>{

        const API_URL="https://fakestoreapi.in/api/products/category?type="+allMenus
        axios.get(API_URL).then(response=>{
            let collectedData=response.data.products
          console.log("special data:",collectedData);

          setItems(collectedData)    
          setLoading(false)   
               
          
        })
      }
      useEffect(()=>{
        getItems();
      },[allMenus])

      
const getPopup = (event,tl,img,prz) => {
    event.preventDefault();
    setTitle(tl)
    setImage(img)
    setPrice(prz)
    setPop(true)
    
    
    }
    
const off = () => {
    setPop(false)
}

const data=items.map((item,index)=>{
    return (
     <li><a href="#" onClick={(event)=>getPopup(event,item.title,item.image,item.price)}>
        <img src={item.image} alt=''></img>
        <h5>{item.title}</h5>
        <h4>${item.price}</h4>
        </a>
        </li>
    )
})

    console.log("special item:",allMenus);
    
  return (
    <div className='shop'>
        <div className="shop-head">
            <h1>{allMenus}</h1>
        </div>
        <div className="shop-header1">
         {pop &&  <Popup off={off} title={title} image={image} price={price}/>}
<ul>
   {!loading ?  data : <Loading />}
    </ul>
   
    </div>
        
        </div>
  )
}

export default Special