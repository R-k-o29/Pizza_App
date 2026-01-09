import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import HomePage from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import OrderPizza from './pages/Orderpizza.jsx';
import PizzaCard from './components/PizzaCard.jsx';
import BuildPizza from './pages/Buildpizza.jsx';
import CartCard from './components/CartCard.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/pizza' element={<OrderPizza/>}/>
        <Route path='/build-pizza' element={<BuildPizza/>}/>
        <Route path='/cart-card' element={<CartCard/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
