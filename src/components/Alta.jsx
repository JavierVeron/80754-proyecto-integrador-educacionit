import { useContext, useEffect, useState } from "react"
import MensajeError from "./MensajeError";
import { ContextAPI } from "./context/ContextAPI";

const Alta = () => {
    const {productos, totalProductosCatalogo, agregarProductoCatalogo, actualizarProductoCatalogo, eliminarProductoCatalogo} = useContext(ContextAPI);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [idProducto, setIdProducto] = useState(0);
    const [nombre, setNombre] = useState("Notebook Lenovo ThinkBook 16 G6 ABP 16''AMD Ryzen 5 7430U 8GB SSD 512GB WUXGA MIL-STD-810H FREEDOS 21KK009DAR");
    const [precio, setPrecio] = useState(1007665);
    const [stock, setStock] = useState(2);
    const [marca, setMarca] = useState("Lenovo");
    const [categoria, setCategoria] = useState("Notebooks");
    const [detalles, setDetalles] = useState("Notebook Gris");
    const [foto, setFoto] = useState("https://imagenes.compragamer.com/productos/compragamer_Imganen_general_45510_Notebook_Lenovo_ThinkBook_16_G6_ABP_16__AMD_Ryzen_5_7430U_8GB_SSD_512GB_WUXGA_MIL-STD-810H_FREEDOS_21KK009DAR_04fea36a-grn.jpg");
    const [envio, setEnvio] = useState(false);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if ((nombre != "") && (precio != "") && (stock != "") && (marca != "") && (categoria != "") && (detalles != "") && (foto != "")) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    })

    const vaciarFormulario = () => {
        setNombre("");
        setPrecio("");
        setStock("");
        setMarca("");
        setCategoria("");
        setDetalles("");
        setFoto("");
        setEnvio(false);
    }

    const agregarProducto = () => {        
        const producto = {nombre, precio, stock, marca, categoria, detalles, foto, envio};
        agregarProductoCatalogo(producto);
        vaciarFormulario();
    }

    const editarProducto = (id) => {
        setModoEdicion(true);
        setIdProducto(id);
        const producto = productos.find(item => item.id == id);
        setNombre(producto.nombre);
        setPrecio(producto.precio);
        setStock(producto.stock);
        setMarca(producto.marca);
        setCategoria(producto.categoria);
        setDetalles(producto.detalles);
        setFoto(producto.foto);
        setEnvio(producto.envio);
    }

    const editarProductoCatalogo = () => {
        const producto = {nombre, precio, stock, marca, categoria, detalles, foto, envio};
        actualizarProductoCatalogo(producto, idProducto);
        vaciarFormulario();
        setModoEdicion(false);
    }

    const eliminarProducto = (id) => {
        const respuesta = confirm("Desea eliminar el Producto #" + id + "?");

        if (respuesta) {
            eliminarProductoCatalogo(id);
        }
    }

    const cancelarEdicion = () => {
        setModoEdicion(false);
    }

    return (
        <>
            <div className="container my-5">
                <div className="row mb-5">
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input type="text" className="form-control" value={precio} onInput={(e) => {setPrecio(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Stock</label>
                                <input type="text" className="form-control" value={stock} onInput={(e) => {setStock(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Marca</label>
                                <input type="text" className="form-control" value={marca} onInput={(e) => {setMarca(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Categoría</label>
                                <input type="text" className="form-control" value={categoria} onInput={(e) => {setCategoria(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Detalles</label>
                                <textarea className="form-control" value={detalles} onInput={(e) => {setDetalles(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Foto</label>
                                <input type="text" className="form-control" value={foto} onInput={(e) => {setFoto(e.target.value)}} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" checked={envio ? "checked" : ""} disabled={disabled} onChange={(e) => {setEnvio(e.target.checked)}} />
                                <label className="form-check-label">Envío Gratis</label>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => {modoEdicion ? editarProductoCatalogo(idProducto) : agregarProducto()}}>{modoEdicion ? "Actualizar" : "Enviar"}</button> {modoEdicion ? <button className="btn btn-primary mx-1" onClick={cancelarEdicion}>Cancelar</button> : ""}
                        </form>
                    </div>
                </div>
            </div>
            {totalProductosCatalogo() > 0 ? <div className="container-fluid my-5">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-center">Imagen</th>
                                    <th className="text-center">Nombre</th>
                                    <th className="text-center">Precio</th>
                                    <th className="text-center">Stock</th>
                                    <th className="text-center">Marca</th>
                                    <th className="text-center">Categoría</th>
                                    <th className="text-center">Envío</th>
                                    <th className="text-center">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productos.map(item => (
                                        <tr key={item.id} className={modoEdicion && item.id == idProducto ? "border border-danger border-2" : ""}>
                                            <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                            <td className="align-middle">{item.nombre}</td>
                                            <td className="align-middle text-center">${item.precio}</td>
                                            <td className="align-middle text-center">{item.stock}</td>
                                            <td className="align-middle text-center">{item.marca}</td>
                                            <td className="align-middle text-center">{item.categoria}</td>
                                            <td className="align-middle text-center">{item.envio ? <b>Sí</b> : "No"}</td>
                                            <td className="align-middle text-center">
                                                <button className="btn btn-danger btn-sm text-white me-1" onClick={() => {editarProducto(item.id)}}>Editar</button>
                                                <button className="btn btn-danger btn-sm text-white" onClick={() => {eliminarProducto(item.id)}} disabled={modoEdicion ? true : false}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> : <MensajeError texto={"No hay Productos!"} />}
        </>
    )
}

export default Alta