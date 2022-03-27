import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards'

const Clase = () => {

  let [clases, setClases] = useState([])

  let getData = async () => {
    let res = await axios.get('http://127.0.0.1:8000/api/indirectas/indirectas/')
    let data = res.data
    data = data.filter(dato => dato.tipo_trabajo === "MATERIAL")
    console.log(data);
    setClases(data)
  }

  useEffect(() => { getData() }, [])

  return (
    <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
      <h1 className="display-1 mt-5">Material De Clases</h1>
      <section className="mt-5">
        <h3>Aqui se enseñan todo el material de clases</h3>
      </section>
      <section className="container mt-5">
        <div className="row">
          {clases.map((clase, index) => {
            return (
              <Cards
                key={index}
                imagen={clase.direccion_imagen}
                titulo={clase.titulo}
                contenido={clase.descripcion}
                link={`/indirectas/archivo/${clase.id}`}
              />

            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Clase