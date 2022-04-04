import React from 'react'

import Cards from '../components/Cards'

import HomeButton from '../components/HomeButton'

import { DirectasData } from '../components/Data/DirectasData'
const Directas = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center">
            <h1 className="display-1 mt-5">Evidencias Directas</h1>
            <section className="mt-5">
                <h3>Aqui se enseñan todas las evidencias de lo realizado en este año </h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    {
                        DirectasData.map((directa, index) => {
                            return (
                                <Cards
                                    key={index}
                                    imagen={directa.imagen}
                                    titulo={directa.titulo}
                                    contenido={directa.contenido}
                                    link={directa.link}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <HomeButton />
        </main>
    )
}

export default Directas