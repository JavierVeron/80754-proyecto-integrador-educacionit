import Logo from "./Logo"

const NavBar = () => {
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Logo />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 d-flex align-items-center justify-content-end">
                        <i className="bi bi-cart text-danger"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar