export default function Header(){
    return(
        <>
        <nav className="navbar bg-black text-white p-3">
            <div className="col-2 nav-item">
                <a href="" className="nav-link fs-2">Pizzeria</a>
            </div>
            <div className="d-flex col-10">
                <div className="d-flex col-4 justify-content-between">
                    <img src="pizzeriaapp/src/assets/pizzeria_logo.png" alt="logo" />
                    <a href="" className="nav-link fs-5">Order Pizza</a>
                    <a href="" className="nav-link fs-5">Build Ur Pizza</a>
                </div>
                <div className="d-flex col-8 justify-content-end">
                    <button className="btn btn-warning text-white">Shopping Cart</button>
                </div>
            </div>
        </nav>
        </>
    );
}