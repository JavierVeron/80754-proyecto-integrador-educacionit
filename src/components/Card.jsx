import { useContext } from "react"
import { ContextAPI } from "./context/ContextAPI"
import { useDispatch } from "react-redux"
import { AGREGAR_PRODUCTO_CARRITO_ACTION } from "./redux/actions/CarritoActions";

const Card = ({item}) => {
    //const {agregarProductoCarrito} = useContext(ContextAPI);
    const dispatch = useDispatch();

    const agregarProductoCarrito = (id) => {
        dispatch(AGREGAR_PRODUCTO_CARRITO_ACTION(id));
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="px-5">
                    <img src={item.foto} className="card-img-top" alt={item.nombre} />
                </div>
                <div className="card-body">
                    <p className="card-text fw-light">{item.nombre.length > 90 ? item.nombre.substr(0, 90) + "..." : item.nombre}</p>
                    <p className="card-text fw-bold fs-5">${item.precio}</p>
                    <p><button className="btn btn-danger text-white fw-bold" onClick={()=>{agregarProductoCarrito(item.id)}}><i className="bi bi-cart text-white fs-6 me-1"></i> Sumar al Carrito</button></p>
                </div>
            </div>
        </div>
    )
}

export default Card