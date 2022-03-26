import React from 'react'

import Cards from '../components/Cards'

const Indirectas = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark min-vh-100 text-center">
            <h1 className="display-1 mt-5">Evidencias Indirectas</h1>
            <section className="mt-5">
                <h3>Aqui se enseñan todas las evidencias indirectas necesarias durante el año </h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Temarios de Examen"
                        contenido="Aqui veremos todos los temarios de los exámenes!"
                        link="/indirectas/temario"
                    />
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Material de Clase"
                        contenido="Aqui veremos todo el material de clase!"
                        link="/indirectas/clase"
                    />

                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Documentos Adicionales"
                        contenido="Aqui veremos todos los documentos adicionales!"
                        link="/indirectas/adicional"
                    />
                </div>
            </section>
        </main>
    )
}

export default Indirectas