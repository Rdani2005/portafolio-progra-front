import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EnunciadosView = () => {

    const { id } = useParams()

    let [enunciado, setEnunciado] = useState([])

    let getData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/enunciados/enunciados/enunciado/${id}/`)
        let data = res.data
        console.log(data);
        setEnunciado(data)
    }

    useEffect(() => {
        getData()
    }, [id])

    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <section className="container mt-5">
                <img src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg" alt="" />
            </section>
            <h1 className="display-1 mt-5">{enunciado.titulo}</h1>

            <section className="container mt-5 display-5">
                {enunciado.descripcion}
            </section>
        </main>
    )
}

export default EnunciadosView