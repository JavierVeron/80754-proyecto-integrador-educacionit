const Categorias = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" aria-current="page" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" href="#">Notebooks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" href="#">Mouses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fw-bold" aria-disabled="true">Monitores</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Categorias