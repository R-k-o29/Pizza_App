import './App.css'
import HomePage from './pages/Home.jsx';
import OrderPizza from './pages/Orderpizza.jsx';
import BuildPizza from './pages/Buildpizza.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart.jsx';

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
