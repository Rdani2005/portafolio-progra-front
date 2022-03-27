import React from 'react'

import Cards from '../components/Cards'

const Complementarias = () => {
    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark min-vh-100 text-center">
            <h1 className="display-1 mt-5">Evidencias Complementarias</h1>
            <section className="mt-5">
                <h3>Aquí vemos evidencias de trabajo extra realizado!</h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Trabajo Escrito del Proyecto"
                        contenido="Aqui veremos el trabajo escrito del proyecto!"
                        link="/complementos/proyecto"
                    />
                    <Cards
                        imagen="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
                        titulo="Diagnostico Aplicado"
                        contenido="Aqui veremos el diagnostico aplicado del primer periodo!"
                        link="/complementos/diagnostico"
                    />

                    
                </div>
            </section>
        </main>
    )
}

export default Complementarias