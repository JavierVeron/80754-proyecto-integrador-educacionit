const Card = ({item}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="px-5">
                    <img src={item.foto} className="card-img-top" alt={item.nombre} />
                </div>
                <div className="card-body">
                    <p className="card-text fw-light">{item.nombre.length > 90 ? item.nombre.substr(0, 90) + "..." : item.nombre}</p>
                    <p className="card-text fw-bold">${item.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default Card