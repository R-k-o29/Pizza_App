import axios  from "axios";
import { useEffect,useState } from "react";
import CartCard from "../components/CartCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Cart(){
    const[itemData,setItemData]=useState([]);

    const grandTotal = itemData.reduce(
        (total,item)=>total+item.price*item.quantity,0
    )

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

    let increaseQty=(index)=>{
        const updated=[...itemData];
        updated[index].quantity+=1;
        updated[index].totalPrice=updated[index].quantity*updated[index].price;
        setItemData(updated);
    }

    let decreaseQty=(index)=>{
        const updated=[...itemData];
        if(updated[index].quantity>1){
            updated[index].quantity-=1;
        }
        updated[index].totalPrice=updated[index].quantity*updated[index].price;
        setItemData(updated);
    }

    let removeItem = (id)=>{
        axios.delete(`http://localhost:3004/api/cart/delete/${id}`).then(()=>{
            alert("Item removed successfully");
            getCartData();
        })
    }

    return(
        <>
        <Header/>
        <div className="d-flex">
            <div className="row">
                {
                itemData.map((item,index)=>{
                    return(
                        <div className="col-md-6">
                            <CartCard
                                itemimage={item.image}
                                itemname={item.name}
                                itemprice={item.price}
                                itemtype={item.itemType}
                                itemquantity={item.quantity}
                                itemdecrease={()=>decreaseQty(index)}
                                itemincrease={()=>increaseQty(index)}
                                deleteItem={()=>removeItem(item._id)}
                            />
                        </div>
                    )
                })
                }
            </div>
            <div className="col-md-6">
                <div className="container border w-75 mt-2 shadow rounded bg-dark text-white p-4">
                    <h2 className="text-center">Order Summary</h2>
                    <div className="bg-light">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>SR.NO</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            {
                                itemData.map((item,index)=>{
                                    return(
                                        <>
                                            <tbody>
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price*item.quantity}</td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </div>
                    <div className="bg-light p-2 m-3 text-center fs-2 card">
                        <span>Total</span>
                        <span>₹ {grandTotal}</span>
                    </div>
                </div>
            </div>
        </div>    
        <Footer/>
        </>
    )
}