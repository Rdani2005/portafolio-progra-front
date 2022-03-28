import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ComplementView = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    let [complemento, setComplemento] = useState([])


    let getData = async () => {
        const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/complementarios/complementarios/complementario/${id}/`)
        let data = res.data
        console.log(data);
        setComplemento(data)
    }


    useEffect(() => { getData() }, [id])


    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <section className="container mt-5">
                <img src={complemento.direccion_imagen} className="w-75" alt="" />
            </section>
            <h1 className="display-1 mt-5">{complemento.titulo}</h1>

            <section className="container mt-5 display-5">
                {complemento.descripcion}
            </section>
            <section className="container mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={() => navigate(-1)} className="button mx-4">Anterior</button>
                    <Link to="/" className="button mx-4">Home</Link>
                    <a href={complemento.direccion} className="button mx-4">Descargar Archivos</a>
                </div>
            </section>
        </main>
    )
}

export default ComplementView