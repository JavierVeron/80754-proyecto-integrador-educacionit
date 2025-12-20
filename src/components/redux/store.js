import { combineReducers, createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga';
import CatalogoReducer from "./CatalogoReducer"
import CarritoReducer from "./CarritoReducer"
import { rootSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({catalogo:CatalogoReducer, carrito:CarritoReducer});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store