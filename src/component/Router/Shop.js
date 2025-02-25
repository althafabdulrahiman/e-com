import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Shop.css'
import Loading from '../Loading/Loading'
import Popup from '../Popup/Popup'
import Special from '../Special/Special'

//create a global context that can be shared to its childrens
export const AllMenuContext=React.createContext()
export const AllContext=React.createContext()

const Shop = () => {

const [items2,setItems2]=useState([])
const [pop,setPop]=useState(false)
const [image,setImage]=useState("")
const [title,setTitle]=useState("")
const [price,setPrice]=useState("")

const [loading,setLoading]=useState(true)

const getItems2= async()=>{

  const API_URL="https://fakestoreapi.com/products"
  axios.get(API_URL).then(response=>{
      let collectedData=response.data
     
      setItems2(collectedData)    
      setLoading(false)   
  })
}
useEffect(()=>{
  getItems2();
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

const data2=items2.map((item2,index)=>{
  return (
   <li><a href="#" onClick={(event)=>getPopup(event,item2.title,item2.image,item2.price)}>
      <img src={item2.image} alt=''></img>
      <h5>{item2.title}</h5>
      <h4>${item2.price}</h4>
      </a>
      </li>
  )
})




//////////////////////////////////////////////
const [items,setItems]=useState([])
const [get,setGet]=useState(false)
const [specialItem,setSpecialItem]=useState("")

  
const getItems= async()=>{

  const API_URL="https://fakestoreapi.in/api/products/category"
  axios.get(API_URL).then(response=>{
      let collectedData=response.data.categories
    console.log("shop data:",collectedData);
         
      setItems(collectedData)    
      setLoading(false)   
  })
}
useEffect(()=>{
  getItems();
},[])


const getAlert = (event,item)=>{
  event.preventDefault();
  setGet(true)
  setSpecialItem(item)

}



const data=items.map((item,index)=>{
  return (
    
   <li><a href="#" onClick={(event)=>getAlert(event,item)}>
      <h4>{item}</h4>
      </a>
      </li>
  )
})


 //////////////////////////////////////////////////////////




  return (
    <div className='shop'>
      <div className="shop-header">
        <h1>Products</h1>
        </div>
       

        <div className="shop-header1">

        {pop &&  <Popup off={off} image={image} title={title} price={price}/>}
        <ul>
   {!loading ?  data2 : <Loading />}
    </ul>
        </div>
        
        <AllMenuContext.Provider value={specialItem}>
          <div className="shop-header2">

          <h2>
<ul>
{!loading ?  data : <Loading />}
</ul></h2>
          </div>

          <div className="getAlert">
          {get && <Special />}
        </div>
        </AllMenuContext.Provider>

    </div>
  )
}

export default Shop