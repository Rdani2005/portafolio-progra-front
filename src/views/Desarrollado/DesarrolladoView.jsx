import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const DesarrolladoView = () => {

    let [desarrollado, setDesarrollado] = useState([])
    let { id } = useParams()


    const getData = async () => {
        const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/desarrollados/desarrollados/desarrollado/${id}/`)
        let data = res.data
        console.log(data);
        setDesarrollado(data)
    }

    useEffect(() => { getData() }, [])

    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <section className="container mt-5">
                <img src={desarrollado.direccion_imagen} alt="" />
            </section>
            <h1 className="display-1 mt-5">{desarrollado.titulo}</h1>

            <section className="container mt-5 display-5">
                {desarrollado.descripcion}
            </section>
            <section className="d-flex justify-content-center align-items-center flex-column p-5 text-center"> 
                <a href={desarrollado.direccion} className="button">Descargar Archivos</a>
            </section>
        </main>
    )
}

export default DesarrolladoView