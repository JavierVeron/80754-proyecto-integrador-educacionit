import { useContext } from "react"
import Card from "./Card"
import MensajeError from "./MensajeError";
import { APIContext } from "./context/APIContext";

const Catalogo = () => {
    const {productos, totalProductos} = useContext(APIContext);

    if (totalProductos() == 0) {
        return (
            <MensajeError texto={"No hay Productos!"} />
        )
    }

    return (
        <div className="container">
            <div className="row">
                {
                    productos.map(item => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Catalogo