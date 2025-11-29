import { createContext, useState } from "react"
import productosJSON from "../../assets/productos.json"

export const APIContext = createContext();

const APIContextProvider = ({children}) => {
    const [productos, setProductos] = useState(productosJSON);
    const [carrito, setCarrito] = useState([]);

    const totalProductos = () => {
        return productos.length;
    }

    const obtenerId = () => {
        let max = 0;

        productos.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        })

        return max + 1;
    }

    const agregarProductoCatalogo = (producto) => {        
        const item = {id:obtenerId(), ...producto};        
        setProductos([...productos, item]);
        console.log("El Producto se agregó correctamente al Catálogo!");
    }

    const actualizarProductoCatalogo = (producto, idProducto) => {
        const item = productos.find(item => item.id == idProducto);
        item.nombre = producto.nombre;
        item.precio = producto.precio;
        item.stock = producto.stock;
        item.marca = producto.marca;
        item.categoria = producto.categoria;
        item.detalles = producto.detalles;
        item.foto = producto.foto;
        item.envio = producto.envio;
        setProductos([...productos]);
        console.log("El Producto #" + idProducto + " se actualizó correctamente en el Catálogo!");
    }

    const eliminarProductoCatalogo = (idProducto) => {
        const productosActualizados = productos.filter(item => item.id != idProducto);
        setProductos([...productosActualizados]);
        console.log("El Producto #" + idProducto + " se eliminó correctamente en el Catálogo!");
    }

    return <APIContext.Provider value={{productos, carrito, totalProductos, agregarProductoCatalogo, actualizarProductoCatalogo, eliminarProductoCatalogo}}>
        {children}
    </APIContext.Provider>
}

export default APIContextProvider