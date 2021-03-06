import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomeButton from '../../components/HomeButton'

import Cards from '../../components/Cards'

const EnunciadoProyecto = () => {

  let [proyectos, setProyectos] = useState([])

  let getData = async () => {
    let res = await axios.get('https://portafolio-progra-back.herokuapp.com/api/enunciados/enunciados/')
    let data = res.data
    data = data.filter(dato => dato.tipo_enunciado === "PROJECT")
    console.log(data);
    setProyectos(data)
  }

  useEffect(() => { getData() }, [])



  return (
    <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
      <h1 className="display-1 mt-5">Enunciado de Proyectos</h1>
      <section className="mt-5">
        <h3>Aqui se enseña el enunciado del proyecto</h3>
      </section>
      <section className="container mt-5">
        <div className="row">
          {proyectos.map((proyecto, index) => {
            return (
              <Cards
                key={index}
                imagen={proyecto.imagen}
                titulo={proyecto.titulo}
                contenido={proyecto.descripcion}
                link={`/enunciados/enunciado/${proyecto.id}`}
              />
            )
          })}
        </div>
      </section>
      <HomeButton />

    </main>
  )
}

export default EnunciadoProyecto