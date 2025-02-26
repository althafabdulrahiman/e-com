import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../Router/Shop.css"

import Loading from '../Loading/Loading'
import Popup from '../Popup/Popup'

const Data = () => {

const [items,setItems]=useState([])
const [loading,setLoading]=useState(true)
const [pop,setPop]=useState(false)
const [image,setImage]=useState("")
const [title,setTitle]=useState("")
const [price,setPrice]=useState("")




const getItems= async()=>{

    const API_URL="https://fakestoreapi.com/products"
    axios.get(API_URL).then(response=>{
        let collectedData=response.data
       
        setItems(collectedData)    
        setLoading(false)   
    })
}
 useEffect(()=>{
    getItems();
 },[])


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

  return (
    <div className='shop'>
        <div className="shop-head">
        <h1>Big Deals</h1>
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

export default Data