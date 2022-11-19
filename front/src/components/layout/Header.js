import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-2">
          <div className="navbar-brand mb-0 h1">
            <Link to={"/"}>
            <img
              src="./logosmall.png"
              width={150}
              height={85}
              alt="Stone Store"
            ></img>
            </Link>
          </div>
        </div>
        <div className="col-md-1">
          <Link to="/productos">
            <button className="administrador">Administrador</button>
          </Link>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
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
          <button className="administrador">Login</button>
          {/* <Link to="/login" className='btn ml-4' id="login_btn">LOGIN</Link> */}
          {/* <i className="fa fa-sign-in fa-2x text-white" aria-hidden="true"></i>
          <span className="ml-2">
            <button className="btn" id="login_btn">
              LOGIN
            </button> */}
          {/* </span> */}
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;