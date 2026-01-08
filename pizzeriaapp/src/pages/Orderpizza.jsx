import axios from 'axios';
import { useState } from 'react';
import PizzaCard from '../components/PizzaCard';
export default function OrderPizza(){

    const[pizzaData,setPizzaData]=useState([]);
    //pizzaData = []
    
    let getAllPizza = (e)=>{
        axios.get(`http://localhost:3002/api/pizza/view`).then((res)=>{
            return res.data;
        }).then((data)=>{
            if(data.status){
                setPizzaData(data.getRes);
            }
        });
    }

    
    return(
        <>
        <h1>Pizza data</h1>
        <button onClick={getAllPizza}>Get pizza details</button>
        {
            pizzaData.map((item,index)=>{
                return(
                    <PizzaCard 
                    pizzaname={item.name} 
                    pizzaprice={item.price} 
                    pizzadescription={item.description}
                    pizzaingredients={item.ingredients} 
                    pizzatoppings={item.topping} 
                    pizzaimageurl={item.image} 
                    />  
                )
            })
        }
        
        </>
    )

}