import React, { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {
    const { loading, productos, error} = useSelector(state => state.products)
    const alert = useAlert ();

    const dispatch = useDispatch();  
    useEffect(() => {
      if (error) {
        return alert.error(error)
      }
      dispatch(getProducts());
      alert.success("OK") 
    }, [dispatch])
    
    return (
    <Fragment>
        {loading ? <h1>Cargando...</h1> :(
          <Fragment>
            <h1 id = "encabezado">Nuestros productos</h1> 

<section id='productos' className='container mt-5'>
  <div className='row'>
    {productos && productos.map (producto => (
      <div key = {producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
      <div className='card p-3'>
         <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img> 
         <div className='card-body d-flex flex-column'>
            <h5 id='nombre_producto'><Link to ={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
            <div className='rating mt-auto'>
              <div className='rating-outer'>
                <div className='rating-inner' style={{width: `${(producto.calificacion/5)*100}%`}}></div>
              </div>
              <span id='No_opiniones'> {producto.numCalificaciones} Opiniones</span>
            </div>
            <p className='card-text'>${producto.precio}</p><Link to ={`/producto/${producto._id}`} id="view_btn" className='btn btn-block'>
              Ver detalle
              </Link>
            </div>
        </div> 
    </div>

    ))}
    
  </div>

</section>

          </Fragment>
        
        )}
        
        

    </Fragment>
  )
}


