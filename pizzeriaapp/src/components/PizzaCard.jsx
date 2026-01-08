export default function PizzaCard({pizzaname,pizzaprice,pizzadescription,pizzaingredients,pizzatoppings,pizzaimageurl}){
    return(
        <>
            <div className="container d-flex border justify-content-between shadow m-2 rounded p-2" style={{"max-width": "500px"}}>
                <div>
                    <p>{pizzaname}</p>
                    <div className="bg-success">-</div>
                    <p>{pizzaprice}</p>
                </div>
                <div>
                    <p>{pizzadescription}</p>
                    <p>{pizzaingredients}</p>
                    <p>{pizzatoppings}</p>
                </div>
                <div>
                    <img src={pizzaimageurl} alt="picture" />
                    <br />
                    <button className="btn btn-warning text-white">Add to cart</button>
                </div>
            </div>
        </>
    )
}