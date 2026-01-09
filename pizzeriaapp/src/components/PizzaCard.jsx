import axios from 'axios';
export default function PizzaCard({pizzaname,pizzaprice,pizzadescription,pizzaingredients,pizzatoppings,pizzaimageurl,pizzatype,pizzaid}){
    const isVeg = pizzatype==='veg';
    const type="pizza"

      let addToCart = async()=>{
        const item={
        itemType: type,
        pizzaId:pizzaid,
        name:pizzaname,
        image:pizzaimageurl,
        price:pizzaprice,
      };
      await axios.post(`http://localhost:3004/api/cart/insert`,item).then((res)=>{
        console.log("Details inserted successfully",res);
      })
      }




    return(
        <>
            <div className="container d-flex border justify-content-between shadow m-2 rounded" style={{"maxWidth": "580px"}}>
                <div className="text-center">
                    <h5 className="mt-3">{pizzaname}</h5>
                    <div className="m-5" style={{"width":"20px","height":"20px",
                        "background": isVeg?"green":"red"
                    }}></div>
                    <p>₹{pizzaprice}</p>
                </div>
                <div className="p-2">
                    <p>{pizzadescription}</p>
                    <p><h5>Ingredients:</h5>{pizzaingredients.join(", ")}</p>
                    <p><h5>Toppings:</h5>{pizzatoppings.join(", ")}</p>
                </div>
                <div className="text-center">
                    <img 
                    src={pizzaimageurl}
                    className="img-fluid rounded p-2" 
                    style={{"width":"200px","height":"120px"}}
                    alt="picture" 
                    />
                    <br />
                    <button className="btn btn-warning text-white mt-2" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </>
    )
}