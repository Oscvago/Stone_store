import React, { Fragment } from 'react'


export const ProductDetails = () => {
  return (
    <Fragment>
      <h1>Marmol 1</h1>
      <div className='row d-flex justify-content-around'>
        <div className='col-12 col-lg-5 img-fluid' id = "imagen_producto">
          <img src='../../imagenes/Marmol1.jpg' alt='Imagen no disponible' height="450" width="450"></img>
        </div>

        <div className='col-12 col-lg-5'>
          <h3>Piedra Marmol 1</h3>
          <p id='product_id'>Product #441654516</p> 
        </div>
      </div>
    </Fragment>
  )
}
