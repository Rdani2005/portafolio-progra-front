import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards'
import HomeButton from '../../components/HomeButton'

const TareasDes = () => {
    let [tareas, setTareas] = useState([])

    let getData = async () => {
        let res = await axios.get('https://portafolio-progra-back.herokuapp.com/api/desarrollados/desarrollados/')
        let data = res.data
        data = data.filter(dato => dato.tipo_trabajo === "TAREAS")
        console.log(data);
        setTareas(data)
    }
    useEffect(() => { getData() }, [])



    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <h1 className="display-1 mt-5">Tareas Realizadas</h1>
            <section className="mt-5">
                <h3>Aqui veremos todas las tareas realizadas</h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    {tareas.map((tarea, index) => {
                        return (
                            <Cards
                                key={index}
                                imagen={tarea.direccion_imagen}
                                titulo={tarea.titulo}
                                contenido={tarea.descripcion}
                                link={`/desarrollados/desarrollado/${tarea.id}`}
                            />
                        )
                    })}
                </div>
            </section>
            <HomeButton />

        </main>
    )
}

export default TareasDes