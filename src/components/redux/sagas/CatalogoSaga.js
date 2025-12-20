import { call, put, takeEvery } from 'redux-saga/effects'
import { ACTUALIZAR_PRODUCTO_CATALOGO, AGREGAR_PRODUCTO_CATALOGO, ELIMINAR_PRODUCTO_CATALOGO, FETCH_PRODUCTO_CATALOGO, FETCH_PRODUCTO_CATALOGO_ERROR, FETCH_PRODUCTO_CATALOGO_SUCCESS } from '../types/CatalogoTypes';
import MockAPI from "../../MockAPI"

function* fetchCatalogoProducto() {
    try {
        const response = yield call(MockAPI.get, "/productos");        
        yield put({type:FETCH_PRODUCTO_CATALOGO_SUCCESS, items:response.data}); 
    } catch (error) {
        yield put(FETCH_PRODUCTO_CATALOGO_ERROR);
    }
}

function* fetchAgregarProductoCatalogo(action) {
    try {        
        const response = yield call(MockAPI.post, "/productos", action.payload);        
        yield put({type:FETCH_PRODUCTO_CATALOGO_SUCCESS, items:response.data});
    } catch (error) {
        yield put(FETCH_PRODUCTO_CATALOGO_ERROR);
    }
}

function* fetchActualizarProductoCatalogo(action) {
    try {        
        const response = yield call(MockAPI.put, "/productos/" + action.payload.id, action.payload.producto);        
        yield put({type:FETCH_PRODUCTO_CATALOGO_SUCCESS, items:response.data});
    } catch (error) {
        yield put(FETCH_PRODUCTO_CATALOGO_ERROR);
    }
}

function* fetchEliminarProductoCatalogo(action) {
    try {
        const response = yield call(MockAPI.delete, "/productos/" + action.payload);        
        yield put({type:FETCH_PRODUCTO_CATALOGO_SUCCESS, items:response.data}); 
    } catch (error) {
        yield put(FETCH_PRODUCTO_CATALOGO_ERROR);
    }
}

export function* watchCatalogoProducto() {
    yield takeEvery(FETCH_PRODUCTO_CATALOGO, fetchCatalogoProducto);
}

export function* watchAgregarProductoCatalogo() {
    yield takeEvery(AGREGAR_PRODUCTO_CATALOGO, fetchAgregarProductoCatalogo);
}

export function* watchActualizarProductoCatalogo() {
    yield takeEvery(ACTUALIZAR_PRODUCTO_CATALOGO, fetchActualizarProductoCatalogo);
}

export function* watchEliminarProductoCatalogo() {
    yield takeEvery(ELIMINAR_PRODUCTO_CATALOGO, fetchEliminarProductoCatalogo);
}