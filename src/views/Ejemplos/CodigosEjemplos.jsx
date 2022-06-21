import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomeButton from '../../components/HomeButton'
import Cards from '../../components/Cards'

const CodigosEjemplos = () => {

    let [ejemplos, setEjemplos] = useState([])

    let getData = async () => {
        let res = await axios.get('https://portafolio-progra-back.herokuapp.com/api/codigos/ejemplos/')
        let data = res.data
        console.log(data);
        setEjemplos(data)
    }

    useEffect(() => { getData() }, [])

    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <h1 className="display-1 mt-5">Codigos Ejemplo</h1>
            <section className="mt-5">
                <h3>Aqui se enseñan todos los codigos brindados por el profesor</h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    {ejemplos.map((ejemplo, index) => {
                        return (
                            <Cards
                                key={index}
                                imagen={ejemplo.direccion_imagen}
                                titulo={ejemplo.titulo}
                                contenido={ejemplo.descripcion}
                                link={`/directas/ejemplos/${ejemplo.id}`}
                            />
                        )
                    })}
                </div>
            </section>
            <HomeButton />

        </main>
    )
}

export default CodigosEjemplos