import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../layout/MetaData"
import { Link, useParams } from 'react-router-dom'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { useAlert } from 'react-alert'
import { Card, Col, Form, Row } from 'react-bootstrap'


export const ModificarProducto = () => {
  const { loading, product, error } = useSelector(state => state.productDetails)
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(getProductDetails(id))
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

  }, [dispatch, alert, error, id])

  return (
    <Fragment>
      {loading ? <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i> : (
        <Fragment>
          <MetaData title={product.name}></MetaData>

            <div className='row d-flex justify-content-around'>

                <div className='col-12 col-lg-5 mt-5'>

                    <Card>
                        {product.imagen && product.imagen.map(img => (
                        <Card.Img key={img.public_id} src={"../"+img.url} alt={img.public_id}/>
                        ))}
                    </Card>

                </div>

                <div className='col-12 col-lg-5 mt-5'>

                    <Form>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}> Product ID </Form.Label>
                            <Form.Label column sm={9}>{product._id}</Form.Label>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}> Nombre: </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="Nombre" defaultValue={product.name} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}> Descripcion: </Form.Label>
                            <Col sm={9}>
                                <Form.Control as="textarea" aria-label="With textarea" placeholder="Nombre" defaultValue={product.description} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}> Stock: </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="Nombre" defaultValue={product.stock} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}> Precio: </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="Nombre" defaultValue={product.price} />
                            </Col>
                        </Form.Group>

                        <Link to="/productos" className="btn btn-success btn-block" type='submit'>Guardar</Link>

                    </Form>

                </div>
                        
            </div>
        </Fragment>
      )}
    </Fragment>
  )
}