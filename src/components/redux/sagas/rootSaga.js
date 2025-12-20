import { all } from "redux-saga/effects";
import { watchActualizarProductoCatalogo, watchAgregarProductoCatalogo, watchCatalogoProducto, watchEliminarProductoCatalogo } from "./CatalogoSaga";

export function* rootSaga() {
    yield all([
        watchCatalogoProducto(),
        watchAgregarProductoCatalogo(),
        watchActualizarProductoCatalogo(),
        watchEliminarProductoCatalogo()
    ])
}