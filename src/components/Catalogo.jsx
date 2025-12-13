import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import MensajeError from "./MensajeError";
//import { ContextAPI } from "./context/ContextAPI";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Catalogo = () => {
    //const {productos, totalProductosCatalogo} = useContext(ContextAPI);
    const productos = useSelector((state) => state.catalogo.items);
    const totalProductosCatalogo = useSelector((state) => state.catalogo.cantidad);
    const [items, setItems] = useState(productos);
    const {id} = useParams();    

    useEffect(() => {
        setItems(id ? productos.filter(item => item.categoria == id) : productos);
    }, [id])

    if (totalProductosCatalogo == 0) {
        return (
            <MensajeError texto={"No hay Productos!"} />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                {
                    items.map(item => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Catalogo