import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards'

const Temarios = () => {

  let [examenes, setExamenes] = useState([])

  let getData = async () => {
    let res = await axios.get('https://portafolio-progra-back.herokuapp.com/api/indirectas/indirectas/')
    let data = res.data
    data = data.filter(dato => dato.tipo_trabajo === "EXAMEN")
    console.log(data);
    setExamenes(data)
  }

  useEffect(() => { getData() }, [])


  return (
    <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
      <h1 className="display-1 mt-5">Temarios de Examenes</h1>
      <section className="mt-5">
        <h3>Aqui se enseñan todos los temarios de examen!</h3>
      </section>
      <section className="container mt-5">
        <div className="row">
          {examenes.map((examen, index) => {
            return (
              <Cards
                key={index}
                imagen={examen.direccion_imagen}
                titulo={examen.titulo}
                contenido={examen.descripcion}
                link={`/indirectas/archivo/${examen.id}`}
              />

            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Temarios