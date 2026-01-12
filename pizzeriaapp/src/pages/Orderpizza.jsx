import axios from "axios";
import { useState,useEffect } from "react";
import PizzaCard from "../components/PizzaCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {toast,ToastContainer} from 'react-toastify';
export default function OrderPizza() {
  const [pizzaData, setPizzaData] = useState([]); 

  let getAllPizza = () => {
    axios
      .get(`http://localhost:3002/api/pizza/view`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (data.status) {
          setPizzaData(data.getRes);
        }
      });
  };

  useEffect(()=>{
    getAllPizza();
  },[])

  return (
    <div className="col-md-10 align-self-center mx-auto">
      <Header />
      <div className="row">
        {pizzaData.map((item, index) => {
        return (
          <div className="col-md-6">
            <PizzaCard
              pizzaname={item.name}
              pizzaprice={item.price}
              pizzadescription={item.description}
              pizzaingredients={item.ingredients}
              pizzatoppings={item.topping}
              pizzaimageurl={item.image}
              pizzatype={item.type}
              pizzaid={item._id}
            />
          </div>
        );
      })}
      </div>
      <Footer/>
    </div>
  );
}
