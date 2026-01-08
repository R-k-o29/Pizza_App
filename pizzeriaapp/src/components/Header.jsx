import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        <nav className="navbar bg-black text-white p-3">
            <div className="col-2 nav-item">
                <Link to='/Home' className="nav-link fs-2">Pizzeria</Link>
            </div>
            <div className="d-flex col-10">
                <div className="d-flex col-4 justify-content-between">
                    <img src="pizzeriaapp/src/assets/pizzeria_logo.png" alt="logo" />
                    <Link to='/pizza' className="nav-link fs-5">Order Pizza</Link>
                    <Link to='/build-pizza' className="nav-link fs-5">Build Ur Pizza</Link>
                </div>
                <div className="d-flex col-8 justify-content-end">
                    <button className="btn btn-warning text-white">Shopping Cart</button>
                </div>
            </div>
        </nav>
        </>
    );
}