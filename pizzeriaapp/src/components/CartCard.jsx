import axios from "axios";
export default function CartCard({itemimage,itemname,itemprice,itemtype,itemquantity,itemdecrease,itemincrease,deleteItem}){
    let isVeg = itemtype==="veg";

    return(
        <>
            <div className="container bg-dark text-white shadow rounded p-2 m-2 text-center" style={{"width":"250px"}}>
                <div>
                    <img 
                    src={itemimage}
                    className="img-fluid rounded" 
                    style={{"width":"120px","height":"120px"}} 
                    alt="logo" />
                </div>
                <div className="d-flex justify-content-center p-2">
                    <div className="m-2" style={{"width":"20px","height":"20px","background":isVeg?"green":"red"}}></div>
                    <span className="mt-1">{itemname}</span>
                </div>
                <div className="d-flex justify-content-center p-2">
                    <div className="m-2" >₹ {itemprice}</div>
                    <button className="btn btn-light border" onClick={itemdecrease}>-</button>
                    <span className="m-2">{itemquantity}</span>
                    <button className="btn btn-light border" onClick={itemincrease}>+</button>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={deleteItem}>Remove</button>
                </div>
            </div>
        </>
    )
}

