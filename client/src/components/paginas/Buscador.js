import React, { useEffect, useState } from 'react'

const Buscador = () => {

  const [productos, setProductos] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const URL = "http://localhost:5006/api/productos"

  const mostrarProductos = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setProductos(data)
  }

  const filtroProducto = (e) => {
    setBusqueda(e.target.value)
    //console.log(e.target.value)
  }

  const resultados = !busqueda ? productos : productos.filter((desc) =>
      desc.descripcion.toLowerCase().includes(busqueda.toLocaleLowerCase())
      ||
      desc.stock.toString().includes(busqueda)
      ||
      desc.precio.toString().includes(busqueda)
    )

  useEffect( () => {
    mostrarProductos()
  }, [])

  return (
    <div>
        <input value={busqueda} onChange={filtroProducto} type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
          <thead>
              <tr className='bg-curso text-black'>
                  <th>DESCRIPCION</th>
                  <th>STOCK</th>
                  <th>PRECIO</th>
              </tr>
          </thead>
          <tbody>
              { resultados.map( (productos) => (
                  <tr key={productos.id}>
                      <td>{productos.descripcion}</td>
                      <td>{productos.stock}</td>
                      <td>{productos.precio}</td>
                  </tr>                    
              ))}
          </tbody>
        </table>
    </div>
  )
}

export default Buscador