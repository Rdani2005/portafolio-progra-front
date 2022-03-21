import React from 'react'

import Cards from '../components/Cards'

const Evaluaciones = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark min-vh-100 text-center">
            <h1 className="display-1 mt-5">Evaluaciones</h1>
            <section className="mt-5">
                <h3>Aqui se enseñan las evaluaciones realizadas </h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Pruebas"
                        contenido="aquí encontrarás las pruebas desarrolladas por el estudiante!"
                        link="/"
                    />
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Hojas de Cotejo"
                        contenido="Aqui se encuentra las hojas de calificación del estudiante!"
                        link="/"
                    />
                </div>
            </section>
        </main>
    )
}

export default Evaluaciones