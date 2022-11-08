import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"
import { Link } from 'react-router-dom'
import { Card, Col, Form, Row } from 'react-bootstrap'


export const NuevoProducto = () => {

  return (
    <Fragment>
      
        <MetaData title={'Nuevo producto'}></MetaData>

        <div className='row d-flex justify-content-around'>

            <div className='col-12 col-lg-5 mt-5'>

                <Card>
                    <label align="center" paddin>Seleccione imagen</label>
                    <Card.Img></Card.Img>
                </Card>

            </div>

            <div className='col-12 col-lg-5 mt-5'>

                <Form>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={3}> Product ID </Form.Label>
                        <Form.Label column sm={9}></Form.Label>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={3}> Nombre: </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Nombre"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={3}> Descripcion: </Form.Label>
                        <Col sm={9}>
                            <Form.Control as="textarea" aria-label="With textarea" placeholder="Nombre"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={3}> Stock: </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Nombre"/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={3}> Precio: </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Nombre"/>
                        </Col>
                    </Form.Group>

                    <Link to="/productos" className="btn btn-success btn-block" type='submit'>Guardar</Link>

                </Form>

            </div>
                    
        </div>
    </Fragment>
  )
}