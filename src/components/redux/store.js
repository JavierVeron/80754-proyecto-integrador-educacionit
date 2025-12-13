import { combineReducers, createStore } from "redux"
import CatalogoReducer from "./CatalogoReducer"
import CarritoReducer from "./CarritoReducer"

const rootReducer = combineReducers({catalogo:CatalogoReducer, carrito:CarritoReducer});
const store = createStore(rootReducer);

export default store