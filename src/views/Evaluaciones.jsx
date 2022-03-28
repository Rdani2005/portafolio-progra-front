import React from 'react'

import Cards from '../components/Cards'
import { EvaluacionesData } from '../components/Data/EvaluacionesData'

import Titulo from '../components/Titulo'
import HomeButton from '../components/HomeButton'

const Evaluaciones = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark min-vh-100 text-center">
            <Titulo titulo="Evaluaciones" descripcion="Aqui se enseñan las evaluaciones realizadas "/>
            <section className="container mt-5">
                <div className="row">
                    {
                        EvaluacionesData.map((directa, index) => {
                            return (
                                <Cards key={index} imagen={directa.imagen} titulo={directa.titulo} contenido={directa.contenido} link={directa.link} />
                            )
                        })
                    }
                </div>
            </section>
            <HomeButton></HomeButton>
        </main>
    )
}

export default Evaluaciones