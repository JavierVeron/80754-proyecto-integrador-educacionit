import { ACTUALIZAR_PRODUCTO_CATALOGO, AGREGAR_PRODUCTO_CATALOGO, ELIMINAR_PRODUCTO_CATALOGO } from "./types/CatalogoTypes"
import productosJSON from "../../assets/productos.json"

const initialState = {
    items:productosJSON,
    cantidad:productosJSON.length
}

const CatalogoReducer = (state=initialState, action) => {
    let producto;

    switch(action.type) {
        case AGREGAR_PRODUCTO_CATALOGO:
            producto = {id:(state.items.length + 1), ...action.payload};
            state.items.push(producto);        
            
            return {
                ...state,
                items:[...state.items],
                cantidad:state.items.length
            }
        case ACTUALIZAR_PRODUCTO_CATALOGO:
            producto = state.items.find(item => item.id == action.payload.id);
            producto.nombre = action.payload.producto.nombre;
            producto.precio = action.payload.producto.precio;
            producto.stock = action.payload.producto.stock;
            producto.marca = action.payload.producto.marca;
            producto.categoria = action.payload.producto.categoria;
            producto.detalles = action.payload.producto.detalles;
            producto.foto = action.payload.producto.foto;
            producto.envio = action.payload.producto.envio;

            return {
                ...state,
                items:[...state.items],
                cantidad:state.items.length
            }
        case ELIMINAR_PRODUCTO_CATALOGO:
            const productosActualizados = state.items.filter(item => item.id != action.payload);

            return {
                ...state,
                items:[...productosActualizados],
                cantidad:productosActualizados.length
            }
        default:
            return state
    }
}

export default CatalogoReducer