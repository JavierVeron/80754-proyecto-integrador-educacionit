import { useEffect, useState } from "react"
import productos from "../assets/productos.json"
import MensajeError from "./MensajeError";

const CarritoDeCompras = () => {
    const [carrito, setCarrito] = useState([]);
    const prod1 = productos.find(item => item.id == 1);
    const prod2 = productos.find(item => item.id == 2);

    useEffect(() => {
        setCarrito([prod1, prod2]);
    }, [])

    if (carrito.length == 0) {
        return (
            <MensajeError texto={"No hay Productos en el Carrito!"} />
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">{item.marca}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle">1</td>
                                        <td className="align-middle">${item.precio}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CarritoDeCompras