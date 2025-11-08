import { useState } from "react"
import productos from "../assets/productos.json"
import Card from "./Card"
import MensajeError from "./MensajeError";

const Catalogo = () => {
    const [items, setItems] = useState(productos);

    if (items.length == 0) {
        return (
            <MensajeError texto={"No hay Productos!"} />
        )
    }

    return (
        <div className="container">
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