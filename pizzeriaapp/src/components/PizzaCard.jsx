export default function PizzaCard({pizzaname,pizzaprice,pizzadescription,pizzaingredients,pizzatoppings,pizzaimageurl,pizzatype}){
    const isVeg = pizzatype==='veg';
    return(
        <>
            <div className="container d-flex border justify-content-between shadow m-2 rounded" style={{"max-width": "580px"}}>
                <div className="text-center">
                    <h5>{pizzaname}</h5>
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
                    <button className="btn btn-warning text-white mt-2">Add to cart</button>
                </div>
            </div>
        </>
    )
}