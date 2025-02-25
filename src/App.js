import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Shop from './component/Router/Shop'
import Cart from './component/Router/Cart'  
import Data from './component/Data/Data'
import MainFooter from './component/MainFooter/MainFooter'


const App = () => {
  return (
    <div>
      
      <Router>
<Navbar />
<Routes>
<Route exact path='/component/Router/Shop' element={<Shop /> }/>
<Route exact path='/component/Router/Cart' element={<Cart /> }/>
<Route exact path='/' element={<>
      <Main />
      <Footer/>
      <Data />
        
        </>}/>

</Routes>

<MainFooter />
{/* <Shop/> */}
</Router>

    </div>
  )
}

export default App