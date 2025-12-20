import { FETCH_PRODUCTO_CATALOGO, FETCH_PRODUCTO_CATALOGO_ERROR, FETCH_PRODUCTO_CATALOGO_SUCCESS } from "./types/CatalogoTypes"

const initialState = {
    items:[],
    cantidad:0,
    loading:false,
    error:false
}

const CatalogoReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTO_CATALOGO:            
            return {
                ...state,
                loading:true,
                error:false
            }
        case FETCH_PRODUCTO_CATALOGO_SUCCESS:            
            return {
                ...state,
                items:[...action.items],
                cantidad:action.items.length,
                loading:false,
                error:false
            }
        case FETCH_PRODUCTO_CATALOGO_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }
        default:
            return state;
    }
}

export default CatalogoReducer