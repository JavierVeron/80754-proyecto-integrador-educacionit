import productosJSON from "../../assets/productos.json"
import { AGREGAR_PRODUCTO_CARRITO, DECREMENTAR_ITEM, ELIMINAR_PRODUCTO_CARRITO, INCREMENTAR_ITEM, VACIAR_CARRITO } from "./types/CarritoTypes"

const initialState = {
    items:[],
    cantidad:0,
    sumaTotal:0
}

const CarritoReducer = (state=initialState, action) => {
    let producto;

    switch(action.type) {
        case AGREGAR_PRODUCTO_CARRITO:
            producto = state.items.find(item => item.id == action.payload);

            if (producto) {
                producto.cantidad++;
            } else {
                producto = productosJSON.find(item => item.id == action.payload);
                producto.cantidad = 1;
                state.items.push(producto);
            }

            return {
                ...state,
                items:[...state.items],
                cantidad:state.items.reduce((acum, item) => acum += item.cantidad, 0),
                sumaTotal:state.items.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case ELIMINAR_PRODUCTO_CARRITO:
            const carritoActualizado = state.items.filter(item => item.id != action.payload);

            return {
                ...state,
                items:[...carritoActualizado],
                cantidad:carritoActualizado.reduce((acum, item) => acum += item.cantidad, 0),
                sumaTotal:carritoActualizado.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case VACIAR_CARRITO:
            return {
                items:[],
                cantidad:0,
                sumaTotal:0
            }
        case INCREMENTAR_ITEM:            
            producto = state.items.find(item => item.id == action.payload);        

            if (producto.cantidad < producto.stock) {
                producto.cantidad++;
                
                return {
                     ...state,
                    items:[...state.items],
                    cantidad:state.items.reduce((acum, item) => acum += item.cantidad, 0),
                    sumaTotal:state.items.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
                }
            }
        case DECREMENTAR_ITEM:
            producto = state.items.find(item => item.id == action.payload);    

            if (producto.cantidad > 1) {
                producto.cantidad--;
                
                return {
                     ...state,
                    items:[...state.items],
                    cantidad:state.items.reduce((acum, item) => acum += item.cantidad, 0),
                    sumaTotal:state.items.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
                }
            }
        default:
            return state
    }
}

export default CarritoReducer