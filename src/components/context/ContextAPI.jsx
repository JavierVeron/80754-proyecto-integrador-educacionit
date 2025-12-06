import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MockAPI from "../MockAPI";

export const ContextAPI = createContext();

const ContextAPIProvider = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [productosActualizados, setProductosActualizados] = useState(true);
    const [carrito, setCarrito] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (productosActualizados) {
                let resultado = await MockAPI.get("/productos");
                setProductos(resultado.data);
                setProductosActualizados(false);
            }
        })();
    }, [])

    const totalProductosCatalogo = () => {
        return productos.length;
    }

    const agregarProductoCatalogo = (producto) => {        
        MockAPI.post("/productos", producto);
        console.log("El Producto se agregó correctamente al Catálogo!");
        setProductosActualizados(true);
    }

    const actualizarProductoCatalogo = (producto, idProducto) => {
        MockAPI.put("/productos/" + idProducto, producto);
        console.log("El Producto #" + idProducto + " se actualizó correctamente en el Catálogo!");
        setProductosActualizados(true);
    }

    const eliminarProductoCatalogo = (idProducto) => {
        MockAPI.delete("/productos/" + idProducto);
        console.log("El Producto #" + idProducto + " se eliminó correctamente en el Catálogo!");
    }

    const agregarProductoCarrito = (id) => {
        let producto = carrito.find(item => item.id == id);        

        if (producto) {
            producto.cantidad++;
            setCarrito([...carrito]);
        } else {
            producto = productos.find(item => item.id == id);
            producto.cantidad = 1;
            setCarrito([...carrito, producto]);
        }

        console.log("El Producto #" + id + " se agregó correctamente al Carrito!");
    }

    const eliminarProductoCarrito = (id) => {
        const productosActualizados = carrito.filter(item => item.id != id);
        setCarrito([...productosActualizados]);
        console.log("El Producto #" + id + " se eliminó correctamente del Carrito!");
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        console.log("El Carrito se vació correctamente!");
    }

    const totalProductosCarrito = () => {
        return carrito.reduce((acum, item) => acum += item.cantidad, 0)
    }

    const sumaTotalProductosCarrito = () => {
        return carrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
    }

    const incrementarItem = (id) => {
        let producto = carrito.find(item => item.id == id);        

        if (producto.cantidad < producto.stock) {
            producto.cantidad++;
            setCarrito([...carrito]);
        }
    }

    const decrementarItem = (id) => {
        let producto = carrito.find(item => item.id == id);        

        if (producto.cantidad > 1) {
            producto.cantidad--;
            setCarrito([...carrito]);
        }
    }

    const agregarPedido = () => {
        const fechaActual = new Date();
        const fecha = `${fechaActual.getDate()}-${fechaActual.getMonth()+1}-${fechaActual.getFullYear()}`;
        const hora = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;
        const pedido = {productos:[...carrito], fecha, hora, total:sumaTotalProductosCarrito()};
        MockAPI.post("/pedidos", pedido);
        console.log("El Pedido se realizó correctamente!");
        vaciarCarrito();
        //navigate("/", {replace:true});
    }

    return <ContextAPI.Provider value={{productos, carrito, totalProductosCatalogo, agregarProductoCatalogo, actualizarProductoCatalogo, eliminarProductoCatalogo, agregarProductoCarrito, eliminarProductoCarrito, vaciarCarrito, totalProductosCarrito, sumaTotalProductosCarrito, incrementarItem, decrementarItem, agregarPedido}}>
        {children}
    </ContextAPI.Provider>
}

export default ContextAPIProvider