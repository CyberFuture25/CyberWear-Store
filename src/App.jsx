import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const slides =[
  {id: "slide-1", img:"https://i.pinimg.com/736x/a1/38/0b/a1380b5c837b1577aba6c18261e1ba26.jpg"},
  {id: "slide-2", img:"https://i.pinimg.com/736x/f4/fe/a6/f4fea65e699e21231b603f6fa7da2af2.jpg"},
  {id: "slide-3", img:"https://i.pinimg.com/736x/9b/64/b5/9b64b5a2ae65cc1d4ef6af8405cc1d4d.jpg"},
]

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/collection' element={<Collection/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/product/:productId' element={<Product/>} />
       <Route path='/cart' element={<Cart/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/place-order' element={<PlaceOrder/>} />
       <Route path='/orders' element={<Orders/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
