import './App.css'
import HomePage from './pages/Home.jsx';
import OrderPizza from './pages/Orderpizza.jsx';
import BuildPizza from './pages/Buildpizza.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart.jsx';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/pizza' element={<OrderPizza/>}/>
        <Route path='/build-pizza' element={<OrderPizza/>}/>
        <Route path='/build-pizza/:pizzaId' element={<BuildPizza/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
