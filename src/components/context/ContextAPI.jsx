import { createContext, useState } from "react"
import productosJSON from "../../assets/productos.json"

export const ContextAPI = createContext();

const ContextAPIProvider = ({children}) => {
    const [productos, setProductos] = useState(productosJSON);
    const [carrito, setCarrito] = useState([]);

    const totalProductosCatalogo = () => {
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

    return <ContextAPI.Provider value={{productos, carrito, totalProductosCatalogo, agregarProductoCatalogo, actualizarProductoCatalogo, eliminarProductoCatalogo, agregarProductoCarrito, eliminarProductoCarrito, vaciarCarrito, totalProductosCarrito, sumaTotalProductosCarrito, incrementarItem, decrementarItem}}>
        {children}
    </ContextAPI.Provider>
}

export default ContextAPIProvider