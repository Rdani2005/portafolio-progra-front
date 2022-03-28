import React from 'react'

const Titulo = ({titulo, descripcion}) => {
    return (
        <>
            <h1 className="display-1 mt-5">{titulo}</h1>
            <section className="mt-5">
                <h3>{descripcion}</h3>
            </section>
        </>
    )
}

export default Titulo