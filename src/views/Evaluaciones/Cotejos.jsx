import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards'

const Cotejos = () => {

  let [cotejos, setCotejos] = useState([])

  let getData = async () => {
    let res = await axios.get('https://portafolio-progra-back.herokuapp.com/api/evaluaciones/evaluaciones/')
    let data = res.data
    data = data.filter(dato => dato.tipo_trabajo === "COTEJO")
    console.log(data);
    setCotejos(data)
  }

  useEffect(() => { getData() }, [])

  return (
    <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
      <h1 className="display-1 mt-5">Hojas de Cotejos</h1>
      <section className="mt-5">
        <h3>Aqui se enseña la informacion importante sobre los examenes!</h3>
      </section>
      <section className="container mt-5">
        <div className="row">
          {cotejos.map((cotejo, index) => {
            return (
              <Cards
                key={index}
                imagen={cotejo.direccion_imagen}
                titulo={cotejo.titulo}
                contenido={cotejo.descripcion}
                link={`/evaluacion/archivo/${cotejo.id}`}
              />

            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Cotejos