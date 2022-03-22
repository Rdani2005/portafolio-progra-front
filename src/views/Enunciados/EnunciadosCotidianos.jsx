import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Cards from '../../components/Cards'

const EnunciadosCotidianos = () => {

  let [cotidianos, setCotidianos] = useState([])

  let getData = async () => {
    let res = await axios.get('http://127.0.0.1:8000/api/enunciados/enunciados/')
    let data = res.data
    data = data.filter(dato => dato.tipo_enunciado === "COTIDIANOS")
    console.log(data);
    setCotidianos(data)
  }

  useEffect(() => { getData() }, [])

  return (
    <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
      <h1 className="display-1 mt-5">Enunciados de Cotidianos</h1>
      <section className="mt-5">
        <h3>Aqui se enseñan todos los enunciados de los cotidianos</h3>
      </section>
      <section className="container mt-5">
        <div className="row">
          {cotidianos.map((cotidiano, index) => {
            return (
              <Cards
                key={index}
                imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                titulo={cotidiano.titulo}
                contenido={cotidiano.descripcion}
                link="/"
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default EnunciadosCotidianos