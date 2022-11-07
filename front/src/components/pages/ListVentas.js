import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { getVentas } from "../../actions/ventasActions";
import MetaData from "../layout/MetaData";

const ListVentas = () => {

  const [ventas, setVentas] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const mostrarVentas = async () => setVentas(await getVentas())

  useEffect( () => {
    mostrarVentas()
  }, [])

  const filtroVentas = (e) => {
    setBusqueda(e.target.value);
  };

  const resultadosVentas = !busqueda ? ventas : ventas.filter((desc) => 
          desc.categoria.toLowerCase().includes(busqueda.toLocaleLowerCase())
        //   ||
        //   desc.stock.toString().includes(busqueda)
        //   ||
        //   desc.price.toString().includes(busqueda)
      );

  return (
    <div>
      <Fragment>
        {/* {loading ? (
          <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i>
        ) : ( */}
          <Fragment>
            <Fragment>
              <MetaData title="Catch Me If You Can"></MetaData>
              <h5 id="header_ventas">
                Vista Administrador - Lista Ventas
              </h5>

              <section id="ventas" className="container mt-5">
                <input value={busqueda} onChange={filtroVentas} type="text" placeholder="Search" className="form-control"/>
                <table className="table table-striped table-hover mt-5 shadow-lg">
                  <thead>
                    <tr className="bg-curso text-black">
                      <th>CATEGORIA</th>
                      <th>CANTIDAD</th>
                      <th>PRECIO</th>
                    </tr>
                  </thead>
                  <tbody>
                    { resultadosVentas.map((ventas) => (
                      <tr key={ventas._id}>
                        <td>{ventas.categoria}</td>
                        <td>{ventas.cantidad}</td>
                        <td>{ventas.precio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </Fragment>
          </Fragment>
        {/* )} */}
      </Fragment>
    </div>
  );
};

export default ListVentas;
