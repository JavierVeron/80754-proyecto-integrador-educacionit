import { useContext } from "react"
import MensajeError from "./MensajeError";
import { ContextAPI } from "./context/ContextAPI";
import { useDispatch, useSelector } from "react-redux";
import { AGREGAR_PEDIDO_ACTION, DECREMENTAR_ITEM_ACTION, ELIMINAR_PRODUCTO_CARRITO_ACTION, INCREMENTAR_ITEM_ACTION, VACIAR_CARRITO_ACTION } from "./redux/actions/CarritoActions";

const CarritoDeCompras = () => {
    //const {carrito, totalProductosCarrito, sumaTotalProductosCarrito, vaciarCarrito, eliminarProductoCarrito, incrementarItem, decrementarItem, agregarPedido} = useContext(ContextAPI);
    const carrito = useSelector((state) => state.carrito.items);
    const totalProductosCarrito = useSelector((state) => state.carrito.cantidad);
    const sumaTotalProductosCarrito = useSelector((state) => state.carrito.sumaTotal);
    const dispatch = useDispatch();

    if (totalProductosCarrito == 0) {
        return (
            <MensajeError texto={"No hay Productos en el Carrito!"} />
        )
    }

    const vaciarCarrito = () => {
        dispatch(VACIAR_CARRITO_ACTION);
    }

    const eliminarProductoCarrito = (id) => {
        dispatch(ELIMINAR_PRODUCTO_CARRITO_ACTION(id));
    }

    const incrementarItem = (id) => {        
        dispatch(INCREMENTAR_ITEM_ACTION(id));
    }

    const decrementarItem = (id) => {
        dispatch(DECREMENTAR_ITEM_ACTION(id));
    }

    const agregarPedido = () => {
        dispatch(AGREGAR_PEDIDO_ACTION);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-9 p-3 bg-white rounded-5">
                    <table className="table">
                        <tbody>
                            <tr className="border-white">
                                <td colSpan={3} className="text-end">
                                    <button type="button" className="btn btn-outline-danger btn-sm p-2 rounded-3" onClick={vaciarCarrito}><i className="bi bi-trash"></i> Vaciar</button>
                                </td>
                            </tr>
                            {
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.foto} alt={item.nombre} width={80} /></td>
                                        <td className="align-bottom">
                                            <div>{item.nombre.length > 50 ? item.nombre.substr(0, 50) : item.nombre}</div>
                                            <div className="text-secondary mx-5 px-1" style={{fontSize:"10px"}}>{item.cantidad == item.stock ? "Límite de compra" : ""}</div>
                                            <div>
                                                <button className="btn btn-outline-danger btn-sm px-2 rounded-3" onClick={() => {eliminarProductoCarrito(item.id)}}><i className="bi bi-trash"></i></button>
                                                <div className="btn-group mx-2" role="group">
                                                <button type="button" className="btn btn-outline-danger btn-sm px-2 rounded-start-3" onClick={() => {decrementarItem(item.id)}} disabled={item.cantidad > 1 ? false : true}>-</button>
                                                <button type="button" className="btn btn-outline-danger btn-sm px-2 text-dark fw-bold">{item.cantidad}</button>
                                                <button type="button" className="btn btn-outline-danger btn-sm px-2 rounded-end-3" onClick={() => {incrementarItem(item.id)}} disabled={item.cantidad == item.stock ? true : false}>+</button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle text-end">
                                            <div>
                                                <b className="fs-4">${item.precio}</b>{item.cantidad > 1 ? <span style={{fontSize:"12px"}}><br />Por unidad <b>${item.precio * item.cantidad}</b></span> : ""}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3 p-3 bg-white rounded-5">
                    <h3>Resumen</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>{totalProductosCarrito} Productos</td>
                                <td className="text-end"><b>${sumaTotalProductosCarrito}</b></td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td className="text-end">
                                    <b><i className="bi bi-cash-coin"></i> ${sumaTotalProductosCarrito}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{fontSize:"12px"}}><i className="bi bi-cash-coin"></i> *Precio abonando con depósito o transferencia.</p>
                    <div className="d-grid">
                        <button className="btn btn-danger btn-sm fw-bold rounded-3" onClick={agregarPedido}>Agregar Pedido</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarritoDeCompras