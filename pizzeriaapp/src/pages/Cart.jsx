import axios  from "axios";
import { useEffect,useState } from "react";
import CartCard from "../components/CartCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Cart(){
    const[itemData,setItemData]=useState([]);

    let getCartData=()=>{
        axios.get(`http://localhost:3004/api/cart/view`).then((res)=>{
            return res.data;
        }).then((data)=>{
            if(data.status){
                setItemData(data.viewRes);
            }
        })
    }

    useEffect(()=>{
        getCartData();
    },[]);

    return(
        <>
        <Header/>
            {
                itemData.map((item,index)=>{
                    return(
                        <CartCard
                        itemimage={item.image}
                        itemname={item.name}
                        itemprice={item.price}
                        itemtype={item.itemType}
                        />
                    )
                })
            }
            <Footer/>
        </>
    )
}