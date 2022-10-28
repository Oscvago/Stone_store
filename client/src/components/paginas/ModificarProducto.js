import React, { useState } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ModificarProducto = () => {

    const { producto_id } = useParams()
    const [producto, setProducto] = useState({})

    const loadProductoDetalles = () => {
        fetch(`http://localhost:5006/api/productos/${producto_id}`)
            .then(res => res.json())
            .then(producto => setProducto(producto))
    }

    loadProductoDetalles()

  return (
    <main>
        <Form>
      <img src={producto.imageUrl}/>
      <Form.Group as={Row} className="mb-3" controlId="formDescripcion">
        <Form.Label column sm="2">
          Descripcion
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={producto.descripcion} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formStock">
        <Form.Label column sm="2">
          Stock
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Stock" defaultValue={producto.stock} />
        </Col>
        <Form.Label column sm="2">
          Precio
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Precio" defaultValue={producto.precio} />
        </Col>
      </Form.Group>
      <Link to="/productos" className="btn btn-success btn-block">Guardar</Link>
    </Form>
    </main>
  )
}

export default ModificarProducto