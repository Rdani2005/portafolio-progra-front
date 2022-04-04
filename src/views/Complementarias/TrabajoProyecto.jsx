import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards'
import HomeButton from '../../components/HomeButton'

const TrabajoProyecto = () => {
    let [proyectos, setProyectos] = useState([])

    let getData = async () => {
        let res = await axios.get('https://portafolio-progra-back.herokuapp.com/api/complementarios/complementarios/')
        let data = res.data
        data = data.filter(dato => dato.tipo_trabajo === "PROYECTO")
        console.log(data);
        setProyectos(data)
    }

    useEffect(() => { getData() }, [])

    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <h1 className="display-1 mt-5">Trabajo Escrito del Proyecto</h1>
            <section className="mt-5">
                <h3>Aqui se enseña El trabajo Escrito del Proyecto</h3>
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
                                link={`/complementos/archivos/${proyecto.id}`}
                            />

                        )
                    })}
                </div>
                <HomeButton />

            </section>
        </main>
    )
}

export default TrabajoProyecto