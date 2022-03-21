import React from 'react'

import Cards from '../components/Cards'

const Directas = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center">
            <h1 className="display-1 mt-5">Evidencias Directas</h1>
            <section className="mt-5">
                <h3>Aqui se enseñan todas las evidencias de lo realizado en este año </h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Enunciado Cotidianos"
                        contenido="Aqui veremos todos los enunciados de los cotidianos!"
                        link="/"
                    />
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Cotidianos Desarrollados"
                        contenido="Aqui veremos todos los cotidianos realizados!"
                        link="/"
                    />

                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Enunciado de Tareas"
                        contenido="Aqui veremos todos los enunciados de las tareas!"
                        link="/"
                    />
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Tareas realizadas"
                        contenido="Aqui veremos todas las tareas realizadas"
                        link="/"
                    />
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Enunciado del Proyecto"
                        contenido="Aqui el enunciado del proyecto!"
                        link="/"
                    />
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Proyecto Realizado"
                        contenido="Aqui veremos el proyecto realizado!"
                        link="/"
                    />
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Codigos Ejemplo"
                        contenido="Aqui veremos todos codigos entregados por el profesor!"
                        link="/"
                    />
                </div>
            </section>
        </main>
    )
}

export default Directas