import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap'
import Productos from '../paginas/Productos';
import Buscador from '../paginas/Buscador';

const Barra = () => {

  return (
    <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src="./logo.png" width="150"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="mb-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ul className="navbar-nav" me-auto>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                </li>
              </ul>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Barra