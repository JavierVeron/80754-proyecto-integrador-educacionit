import { Link } from "react-router-dom"

const Categorias = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link text-dark fw-bold">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/notebooks"} className="nav-link text-dark fw-bold">Notebooks</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/mouses"} className="nav-link text-dark fw-bold">Mouses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/monitores"} className="nav-link text-dark fw-bold">Monitores</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Categorias