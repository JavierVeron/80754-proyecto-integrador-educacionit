import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to={"/"}>
            <img src="https://imagenes.compragamer.com/assets/logos/newlogo_blanco.svg" alt="Compra Gamer" width={180} />
        </Link>
    )
}

export default Logo