import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import MetaData from '../layout/MetaData';
import { Link } from 'react-router-dom';

const ListProducts = () => {

    const { loading, products, error } = useSelector(state => state.products);
    const alert = useAlert();
    const dispatch = useDispatch();
    useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
    }, [alert, dispatch, error]);

    const [busqueda, setBusqueda] = useState("")

    const filtroProducto = (e) => {
        setBusqueda(e.target.value)
      }

    const resultados = !busqueda ? products : products.filter((desc) =>
      desc.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    )

  return (
    <div>
        <Fragment>
        {loading ? (
            <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i>
        ) : (
            <Fragment>
            <Fragment>
                <MetaData title="Productos"></MetaData>
                <h5 id="header_products" align="center">Vista Administrador - Lista Productos</h5>                
                <div>
                    <button><Link to={`/productos`}>Lista Productos</Link></button>
                    <button><Link to={`/ventas`}>Lista Ventas</Link></button>
                    <button><Link to={`/producto/new`}>Nuevo Producto</Link></button>
                </div>

                <section id="products" className="container mt-5">

                <input value={busqueda} onChange={filtroProducto} type="text" placeholder='Search' className='form-control'/>
                    <table className='table table-striped table-hover mt-5 shadow-lg'>
                    <thead>
                        <tr className='bg-curso text-black'>
                            <th>NOMBRE</th>
                            <th>STOCK</th>
                            <th>PRECIO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        { resultados.map( (products) => (
                            <tr key={products._id}>
                                <td>{products.name}</td>
                                <td>{products.stock}</td>
                                <td>{new Intl.NumberFormat("de-DE").format(`${products.price}`)}</td>
                                <td>
                                    <button><Link to={`/producto/${products._id}`}>Modificar</Link></button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </section>
            </Fragment>
            </Fragment>
        )}
        </Fragment>
    </div>
  )
}

export default ListProducts