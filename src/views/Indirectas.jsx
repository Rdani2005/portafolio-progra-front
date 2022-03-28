import React from 'react'

import Cards from '../components/Cards'

import { IndirectasData } from '../components/Data/IndirectasData'
import HomeButton from '../components/HomeButton'
import Titulo from '../components/Titulo'
const Indirectas = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark min-vh-100 text-center">
           <Titulo titulo="Evidencias Indirectas" descripcion="Aqui se enseñan todas las evidencias indirectas necesarias durante el año "/>
            <section className="container mt-5">
                <div className="row">
                    {
                        IndirectasData.map((directa, index) => {
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

export default Indirectas