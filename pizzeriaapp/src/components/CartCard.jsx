export default function CartCard({itemimage,itemname,itemprice,itemtype}){
    let isVeg = itemtype==="veg";
    return(
        <>
            <div className="container bg-light shadow rounded p-2 m-2 w-25 text-center">
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
                    <button className="btn btn-warning text-white">Add +</button>
                </div>
            </div>
        </>
    )
}

