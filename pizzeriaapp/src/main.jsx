import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header.jsx';
import HomePage from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import OrderPizza from './pages/Orderpizza.jsx';
import PizzaCard from './components/PizzaCard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HomePage/> */}
    <OrderPizza  />
    {/* <PizzaCard/> */}
  </StrictMode>,
)
