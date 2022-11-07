import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to={"/"}>
            <img
              src="./images/hotwheelslogo.png"
              alt="E-Commerce HotWheels"
            ></img>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div>
          <Link to={`/productos`}>Lista de Productos</Link>
          <p></p>
          <Link to={`/ventas`}>Lista de Ventas</Link>
        </div>
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control text-center"
              placeholder="Search product"
            ></input>
            <div className="input-group-append">
              <button id="search-btn" className="btn">
                <i
                  className="fa fa-search-plus fa-2x text-white"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <span className="ml-5"></span>
          <i
            className="fa fa-shopping-cart fa-2x text-white"
            aria-hidden="false"
          ></i>
          <span className="ml-2" id="cart_count">
            0
          </span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <i className="fa fa-sign-in fa-2x text-white" aria-hidden="true"></i>
          <span className="ml-2">
            <button className="btn" id="login_btn">
              LOGIN
            </button>
          </span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;