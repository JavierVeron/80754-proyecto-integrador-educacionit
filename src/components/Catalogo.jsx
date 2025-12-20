import { useEffect, useState } from "react"
import Card from "./Card"
import MensajeError from "./MensajeError";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { FETCH_PRODUCTO_CATALOGO_ACTION } from "./redux/actions/CatalogoActions";

const Catalogo = () => {
    const catalogo = useSelector((state) => state.catalogo);
    const productos = useSelector((state) => state.catalogo.items);
    const totalProductosCatalogo = useSelector((state) => state.catalogo.cantidad);
    const dispatch = useDispatch();
    const [items, setItems] = useState(productos);
    const {id} = useParams();

    useEffect(() => {
        dispatch(FETCH_PRODUCTO_CATALOGO_ACTION());        
    }, [dispatch]);

    useEffect(() => {
        setItems(id ? productos.filter(item => item.categoria == id) : productos);
    }, [id])

    if (totalProductosCatalogo == 0) {
        return (
            <MensajeError texto={"No hay Productos!"} />
        )
    }

    return (
        <>
            {catalogo.loading ? <Loading /> :<div className="container my-5">
                <div className="row">
                    {
                        items.map(item => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>}
        </>
    )
}

export default Catalogo