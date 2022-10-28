import React from "react";
import { Link } from "react-router-dom";

const Imagen = (props) => {
    const {_id, imageUrl, tags, stock, precio} = props.imagen;
    return (
        <div className="col-12 col-sm-6 cik-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={imageUrl} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">Stock: {stock}</p>
                    <p className="card-text">Precio: {precio} /m2</p>
                    <Link to={`/modificar/${_id}`} className="btn btn-primary btn-block">Modificar</Link>
                </div>
            </div>
        </div>
    )
}

export default Imagen