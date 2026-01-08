import axios from "axios";
import { useState,useEffect } from "react";
import PizzaCard from "../components/PizzaCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function OrderPizza() {
  const [pizzaData, setPizzaData] = useState([]);
  //pizzaData = []

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
    <>
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
            />
          </div>
        );
      })}
      </div>
      <Footer/>
    </>
  );
}
