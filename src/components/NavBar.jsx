import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useContext } from "react"
import { ContextAPI } from "./context/ContextAPI"
import { useSelector } from "react-redux"

const NavBar = () => {
    //const {totalProductosCarrito} = useContext(ContextAPI);
    const totalProductosCarrito = useSelector((state) => state.carrito.cantidad);

    return (
        <div className="container-fluid bg-dark py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Logo />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 d-flex align-items-center justify-content-end">
                        <Link to={"/alta"} title="Alta de Productos">
                            <i className="bi bi-clipboard2-plus text-danger fs-4 mx-1"></i>
                        </Link>
                        <Link to={"/carrito"} title="Carrito de Compras" className="position-relative">
                            <i className="bi bi-cart text-danger text-danger fs-4"></i>
                            <span className="position-absolute top-0 end translate-middle badge rounded-pill bg-danger">{totalProductosCarrito}</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar