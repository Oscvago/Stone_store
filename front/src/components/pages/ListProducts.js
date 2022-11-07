import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import MetaData from '../layout/MetaData';

const ListProducts = () => {

    const { loading, products, error } = useSelector(state => state.products);
    const alert = useAlert();
    const dispatch = useDispatch();
    useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
    // alert.success("OK");
    }, [alert, dispatch, error]);

    const [busqueda, setBusqueda] = useState("")

    const filtroProducto = (e) => {
        setBusqueda(e.target.value)
        //console.log(e.target.value)
      }

    const resultados = !busqueda ? products : products.filter((desc) =>
      desc.name.toLowerCase().includes(busqueda.toLocaleLowerCase())
    //   ||
    //   desc.stock.toString().includes(busqueda)
    //   ||
    //   desc.price.toString().includes(busqueda)
    )

  return (
    <div>
        <Fragment>
        {loading ? (
            <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i>
        ) : (
            <Fragment>
            <Fragment>
                <MetaData title="Catch Me If You Can"></MetaData>
                <h5 id="header_products">Vista Administrador - Lista productos</h5>

                <section id="products" className="container mt-5">

                <input value={busqueda} onChange={filtroProducto} type="text" placeholder='Search' className='form-control'/>
                    <table className='table table-striped table-hover mt-5 shadow-lg'>
                    <thead>
                        <tr className='bg-curso text-black'>
                            <th>NOMBRE</th>
                            <th>STOCK</th>
                            <th>PRECIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        { resultados.map( (products) => (
                            <tr key={products._id}>
                                <td>{products.name}</td>
                                <td>{products.stock}</td>
                                <td>{products.price}</td>
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