import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Cards from '../../components/Cards'

const Adicional = () => {
  let [adicionales, setAdicionales] = useState([])

  let getData = async () => {
    let res = await axios.get('http://127.0.0.1:8000/api/indirectas/indirectas/')
    let data = res.data
    data = data.filter(dato => dato.tipo_trabajo === "ADICIONAL")
    console.log(data);
    setAdicionales(data)
  }

  useEffect(() => { getData() }, [])

  return (
    <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
      <h1 className="display-1 mt-5">Material Adicional</h1>
      <section className="mt-5">
        <h3>Aqui se enseñan todo el material adicional brindado por el profesor</h3>
      </section>
      <section className="container mt-5">
        <div className="row">
          {adicionales.map((adicional, index) => {
            return (
              <Cards
                key={index}
                imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                titulo={adicional.titulo}
                contenido={adicional.descripcion}
                link={`/indirectas/archivo/${adicional.id}`}
              />
              
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Adicional