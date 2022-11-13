import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../layout/MetaData"
import { useParams } from 'react-router-dom'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { useAlert } from 'react-alert'
import { Carousel } from 'react-bootstrap'


export const ProductDetails = () => {
  const { loading, product, error } = useSelector(state => state.productDetails)
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1)


  useEffect(() => {
    dispatch(getProductDetails(id))
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

  }, [dispatch, alert, error, id])

  const increaseQty = () => {
    const stockCounter = document.querySelector('.count')

    if (stockCounter.valueAsNumber >= product.stock) return;

    const qty = stockCounter.valueAsNumber + 1;
    setQuantity(qty)
  }

  const decreaseQty = () => {
    const stockCounter = document.querySelector('.count')

    if (stockCounter.valueAsNumber <= 1) return;

    const qty = stockCounter.valueAsNumber - 1;
    setQuantity(qty)
  }

  return (
    <Fragment>
      {loading ? <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i> : (
        <Fragment>
          <MetaData title={product.name}></MetaData>
          <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 mt-5' id="imagen_product"> {/* className='col-12 col-lg-5 img-fluid' */}
              <Carousel pause='hover'>
                {product.imagen && product.imagen.map(img => (
                  <Carousel.Item key={img.public_id}>
                    <img className="d-block w-100" src={"../" + img.url} alt={product.name}></img>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
              <h5>{product.name}</h5>
              <p id="product_id">ID the product {product._id}</p>
              <hr />

              <div className='rating-outer'>
                <div className="rating-inner" style={{ width: `${(product.rating / 5) * 100}%` }}></div>
              </div>
              <span id="No_de_reviews">  ({product.scoreProduct} Reviews)</span>
              <hr />
              <p id="price_product">${product.price}</p>
              <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
              </div>
              <button type="button" id="carrito_btn" className="btn btn-primary d-inline ml-4" disabled={product.stock === 0}>Add to 🛒</button>
              <hr />
              <p>Estado: <span id="stock_stado" className={product.stock > 0 ? 'greenColor' : 'redColor'}>{product.stock > 0 ? "Available" : "Shot out"}</span></p>
              <hr />
              <h5 className="mt-2">Description:</h5>
              <p>{product.description}</p>
              <hr />              
              <button id="btn_review" type="button" className="btn btn-primary mt-4"
                data-toggle="modal" data-target="#ratingModal">Write your review</button>
              <div className="alert alert-danger mt-5" type="alert">Login for write your review</div>

              {/* Message for write your review and score product */}
              <div className="row mt-2 mb-5">
                <div className="rating w-50">
                  <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog"
                    aria-labelledby='ratingModalLabel' aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="ratingModalLabel">Send Review</h5>
                          <button type="button" className='close' data-dismiss="modal" aria-label='Close'>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <ul className="stars">
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                            <li className="star"><i className="fa fa-star"></i></li>
                          </ul>

                          <textarea name="review" id="review" className="form-control mt3"></textarea>

                          <button className="btn my-3 float-right review-btn px-4 text-white"
                            data-dismiss="modal" aria-label="Close">Send</button>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>

  )
}

