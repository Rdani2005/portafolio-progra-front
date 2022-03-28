import React from 'react'

import Cards from '../components/Cards'

import HomeButton from '../components/HomeButton'
import Titulo from '../components/Titulo'

import { ComplementariasData } from '../components/Data/ComplementariasData'
const Complementarias = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark min-vh-100 text-center">
            <Titulo titulo="Evidencias Complementarias" descripcion="Aquí vemos evidencias de trabajo extra realizado!" />
            <section className="container mt-5">
                <div className="row">
                    {
                        ComplementariasData.map((directa, index) => {
                            return (
                                <Cards key={index} imagen={directa.imagen} titulo={directa.titulo} contenido={directa.contenido} link={directa.link} />
                            )
                        })
                    }
                </div>
            </section>
            <HomeButton />
        </main>
    )
}

export default Complementarias