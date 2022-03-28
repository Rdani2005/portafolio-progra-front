import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import VistaObjetos from '../../components/VistaObjetos'
const EvaluacionesViews = () => {

  const { id } = useParams()

  let [evaluacion, setEvaluacion] = useState([])


  let getData = async () => {
    const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/evaluaciones/evaluaciones/evaluacion/${id}/`)
    let data = res.data
    console.log(data);
    setEvaluacion(data)
  }

  useEffect(() => { getData() }, [id])



  return (
      <VistaObjetos imagen={evaluacion.direccion_imagen} titulo={evaluacion.titulo} descripcion={evaluacion.decripcion} direccion={evaluacion.direccion}></VistaObjetos>
  )
}

export default EvaluacionesViews