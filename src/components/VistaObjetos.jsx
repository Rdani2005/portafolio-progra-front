import React from 'react'
import Retroceso from './Retroceso'
const VistaObjetos = ({imagen, titulo, descripcion, direccion}) => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <section className="container mt-5">
                <img src={imagen} className="w-75" alt="" />
            </section>
            <h1 className="display-1 mt-5">{titulo}</h1>

            <section className="container mt-5 display-5">
                {descripcion}
            </section>
            <Retroceso link={direccion}></Retroceso>
        </main>
    )
}

export default VistaObjetos