import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Retroceso = ({ link }) => {
    const navigate = useNavigate()

    return (
        <section className="container mt-5">

            <div className="d-flex flex-wrap justify-content-center align-items-center">
                <button onClick={() => navigate(-1)} className="button mx-4 my-4">Anterior</button>
                <Link to="/" className="button mx-4 my-4">Home</Link>
                <a href={link} className="button mx-4 my-4">Descargar Archivos</a>
            </div>
        </section>
    )
}

export default Retroceso