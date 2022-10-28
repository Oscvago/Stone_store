import React, { useState } from "react"
import Imagen from "./Imagen"

const Productos = () => {

    const [productos, setProductos] = useState([])

    const loadProductos = () => {
        fetch('http://localhost:5006/api/productos')
        .then(res => res.json())
        .then(allProductos => setProductos(allProductos))
    }

    loadProductos()

  return (
    <main>
        <h1>Vista Administrador - Lista Productos</h1>
        <hr />
        <React.Fragment>
        <div className="col-12 p-5 row">
            {productos.map(eachProducto => (
                <Imagen
                    key={eachProducto.id}
                    imagen={eachProducto}
                />
            ))}
                    {/*<CardGroup>
                        <Card>
                            <Card.Img variant="top" src={eachProducto.imageUrl}/>
                            <Card.Body>
                                <Card.Title>{eachProducto.descripcion}</Card.Title>
                                <Card.Subtitle>Stock: {eachProducto.stock}</Card.Subtitle>
                                <Card.Text>Precio: {eachProducto.precio}</Card.Text>
                                <Button variant="primary">Modificar</Button>
                            </Card.Body>
                            <Link to={`/productos/${eachProducto._id}`}>
                            </Link>
                        </Card>
                    </CardGroup>*/}
        </div>
        </React.Fragment>
    </main>
  )
}

export default Productos