<<<<<<< HEAD
import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";

export const Home = () => {
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
  return (
    <Fragment>
      {loading ? (
        <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i>
      ) : (
        <Fragment>
          <Fragment>
            <MetaData title="Catch Me If You Can"></MetaData>
            <h5 id="header_products">Latest products ⭐</h5>

            <section id="products" className="container mt-5">
              <div className="row">
                {products &&
                  products.map((products) => (
                    <div
                      key={products._id}
                      className="col-sm-12 col-md-6 col-lg-3 my-3"
                    >
                      <div className="card p-3 rounded">
                        <img
                          className="card-img-top mx-auto"
                          src={products.imagen[0].url}
                          alt={products.imagen[0].public_id}
                        ></img>
                        <div className="card-body d-flex flex-column text-center">
                          <h5 id="title_product">
                            <Link to={`/product/${products._id}`}>
                              {products.name}
                            </Link>
                          </h5>
                          <div className="rating mt-auto">
                            <div className="rating-outer">
                              <div
                                className="rating-inner"
                                style={{
                                  width: `${(products.rating / 5) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <span id="comments">
                              {" "}
                              {products.scoreProduct} Reviews
                            </span>
                          </div>
                          <p className="card-text">${products.price}</p>
                          <Link
                            to={`/product/${products._id}`}
                            id="view_btn"
                            className="btn btn-block"
                          >
                            View datails
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};
export default Home;
=======
import React, { Fragment, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { getProducts } from '../actions/productActions'

export const Home = () => {
    const dispatch = useDispatch();  
    useEffect(() => {
      dispatch(getProducts()); 
    }, [dispatch])
    
    return (
    <Fragment>
        <h1 id = "encabezado">Nuestros productos</h1> 

        <section id='productos' className='container mt-5'>
          <div className='row'>
            {/*===== 1 =====*/} 
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3'>
                 <img className='card-img-top mx-auto' src='./imagenes/Marmol1.jpg' alt="Imagen no disponible"></img> 
                 <div className='card-body d-flex flex-column'>
                    <h5 id='nombre_producto'><a href='http://localhost:3000'>Piedra Marmol tableta</a></h5>
                    <div className='rating mt-auto'>
                      <div className='rating-outer'>
                        <div className='rating-inner'></div>
                      </div>
                      <span id='No_opiniones'> 3 opiniones</span>
                    </div>
                    <p className='card-text'>$69.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                      Ver detalle
                      </a>
                    </div>
                </div> 
            </div>
            {/*===== 2 =====*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3'>
                 <img className='card-img-top mx-auto' src='./imagenes/Marmol2.jpg' alt="Imagen no disponible"></img> 
                 <div className='card-body d-flex flex-column'>
                    <h5 id='nombre_producto'><a href='http://localhost:3000'>Piedra Marmol tableta oscura</a></h5>
                    <div className='rating mt-auto'>
                      <div className='rating-outer'>
                        <div className='rating-inner'></div>
                      </div>
                      <span id='No_opiniones'> 12 opiniones</span>
                    </div>
                    <p className='card-text'>$85.400</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                      Mas detalles
                    </a>
                    </div>
                </div> 
            </div>
            {/*===== 3 =====*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3'>
                 <img className='card-img-top mx-auto' src='./imagenes/Marmol3.jpg' alt="Imagen no disponible"></img> 
                 <div className='card-body d-flex flex-column'>
                    <h5 id='nombre_producto'><a href='http://localhost:3000'>Piedra Marmol bloque</a></h5>
                    <div className='rating mt-auto'>
                      <div className='rating-outer'>
                        <div className='rating-inner'></div>
                      </div>
                      <span id='No_opiniones'> 6 opiniones</span>
                    </div>
                    <p className='card-text'>$103.900</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                      Mas detalles
                    </a>
                    </div>
                </div> 
            </div>
            {/*===== 4 =====*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3'>
                 <img className='card-img-top mx-auto' src='./imagenes/Marmol4.jpg' alt="Imagen no disponible"></img> 
                 <div className='card-body d-flex flex-column'>
                    <h5 id='nombre_producto'><a href='http://localhost:3000'>Piedra Marmol tableta variedad</a></h5>
                    <div className='rating mt-auto'>
                      <div className='rating-outer'>
                        <div className='rating-inner'></div>
                      </div>
                      <span id='No_opiniones'> 5 opiniones</span>
                    </div>
                    <p className='card-text'>$73.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                      Mas detalles
                    </a>
                    </div>
                </div> 
            </div>
            {/*===== 5 =====*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3'>
                 <img className='card-img-top mx-auto' src='./imagenes/Marmol5.jpg' alt="Imagen no disponible"></img> 
                 <div className='card-body d-flex flex-column'>
                    <h5 id='nombre_producto'><a href='http://localhost:3000'>Piedra Marmol cocina</a></h5>
                    <div className='rating mt-auto'>
                      <div className='rating-outer'>
                        <div className='rating-inner'></div>
                      </div>
                      <span id='No_opiniones'> 2 opiniones</span>
                    </div>
                    <p className='card-text'>$53.100</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                      Mas detalles
                    </a>
                    </div>
                </div> 
            </div>
            {/*===== 6 =====*/}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
              <div className='card p-3'>
                 <img className='card-img-top mx-auto' src='./imagenes/Marmol6.jpg' alt="Imagen no disponible"></img> 
                 <div className='card-body d-flex flex-column'>
                    <h5 id='nombre_producto'><a href='http://localhost:3000'>Piedra Marmol meson</a></h5>
                    <div className='rating mt-auto'>
                      <div className='rating-outer'>
                        <div className='rating-inner'></div>
                      </div>
                      <span id='No_opiniones'> 15 opiniones</span>
                    </div>
                    <p className='card-text'>$189.900</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                      Mas detalles
                    </a>
                    </div>
                </div> 
            </div>
          </div>

        </section>
        

    </Fragment>
  )
}


>>>>>>> 4934fdf95e4744cfa83a7bd70011ae0878f4b5b3
