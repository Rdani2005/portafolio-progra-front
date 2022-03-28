import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EvaluacionesViews = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  let [evaluacion, setEvaluacion] = useState([])


  let getData = async () => {
    const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/evaluaciones/evaluaciones/evaluacion/${id}/`)
    let data = res.data
    console.log(data);
    setEvaluacion(data)
  }

  useEffect(() => { getData() }, [id])



  return (
    <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
      <section className="container mt-5">
        <img src={evaluacion.direccion_imagen} className="w-75" alt="" />
      </section>
      <h1 className="display-1 mt-5">{evaluacion.titulo}</h1>

      <section className="container mt-5 display-5">
        {evaluacion.descripcion}
      </section>
      <section className="container mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={() => navigate(-1)} className="button mx-4">Anterior</button>
          <Link to="/" className="button mx-4">Home</Link>
          <a href={evaluacion.direccion} className="button mx-4">Descargar Archivos</a>
        </div>
      </section>
    </main>
  )
}

export default EvaluacionesViews