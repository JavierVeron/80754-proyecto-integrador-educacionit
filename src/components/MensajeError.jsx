const MensajeError = ({texto}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-danger py-4" role="alert"><b>{texto}</b></div>
                </div>
            </div>
        </div>
    )
}

export default MensajeError