import React, { Fragment } from 'react'

const Headers = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img src="./imagenes/loguito.png" width="150" height="100" alt="Imagen no disponible"></img>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div class="input-group">
                    <input
                        type="text"
                        id="search_field"
                        class="form-control"
                        placeholder='Desea ver algun producto?'></input>
                        <div class="input-group-append">
                            <button id="search-btn" class="btn">
                            <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>
                                </button>
                        </div>
                </div>
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
              <span><button type="button" class="btn btn-warning">Inciar sesion</button></span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span><i className="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i></span>
              <span className="ml-1" id="cart_count">2</span>
            </div>
        </nav>

    </Fragment>  
  )
}

export default Headers