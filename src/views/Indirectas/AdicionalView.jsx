import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Retroceso from '../../components/Retroceso'
const AdicionalView = () => {

  const { id } = useParams()

  let [indirecta, setIndirecta] = useState([])


  let getData = async () => {
    const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/indirectas/indirectas/indirecta/${id}/`)
    let data = res.data
    console.log(data);
    setIndirecta(data)
  }

  useEffect(() => { getData() }, [id])


  return (
    <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
      <section className="container mt-5">
        <img src={indirecta.direccion_imagen} className="w-75" alt="" />
      </section>
      <h1 className="display-1 mt-5">{indirecta.titulo}</h1>

      <section className="container mt-5 display-5">
        {indirecta.descripcion}
      </section>
      <Retroceso link={indirecta.direccion}></Retroceso>
    </main>
  )
}

export default AdicionalView