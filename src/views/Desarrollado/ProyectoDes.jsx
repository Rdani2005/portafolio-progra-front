import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards'

const ProyectoDes = () => {
    let [proyectos, setProyectos] = useState([])

    let getData = async () => {
        let res = await axios.get('http://127.0.0.1:8000/api/desarrollados/desarrollados/')
        let data = res.data
        data = data.filter(dato => dato.tipo_trabajo === "PROJECT")
        console.log(data);
        setProyectos(data)
    }

    useEffect(() => { getData() }, [])
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <h1 className="display-1 mt-5">Proyecto Realizado</h1>
            <section className="mt-5">
                <h3>Aqui veremos el proyecto Realizado</h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    {proyectos.map((proyecto, index) => {
                        return (
                            <Cards
                                key={index}
                                imagen={proyecto.direccion_imagen}
                                titulo={proyecto.titulo}
                                contenido={proyecto.descripcion}
                                link={`/desarrollados/desarrollado/${proyecto.id}`}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default ProyectoDes