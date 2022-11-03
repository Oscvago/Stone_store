import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img
              src="./images/hotwheelslogo.png"
              alt="E-Commerce HotWheels"
            ></img>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
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
          <Link to="/signin">
            <button className="btn" id="login_btn">
              LOGIN
            </button>
          </Link>
          </span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
