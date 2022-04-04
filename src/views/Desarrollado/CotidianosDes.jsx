import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards'
import HomeButton from '../../components/HomeButton'

const CotidianosDes = () => {

    let [cotidianos, setCotidianos] = useState([])

    let getData = async () => {
        let res = await axios.get('https://portafolio-progra-back.herokuapp.com/api/desarrollados/desarrollados/')
        let data = res.data
        data = data.filter(dato => dato.tipo_trabajo === "COTIDIANOS")
        console.log(data);
        setCotidianos(data)
    }

    useEffect(() => { getData() }, [])

    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <h1 className="display-1 mt-5">Cotidianos Desarrollados</h1>
            <section className="mt-5">
                <h3>Aqui veremos todos los cotidianos desarrollados</h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    {cotidianos.map((cotidiano, index) => {
                        return (
                            <Cards
                                key={index}
                                imagen={cotidiano.direccion_imagen}
                                titulo={cotidiano.titulo}
                                contenido={cotidiano.descripcion}
                                link={`/desarrollados/desarrollado/${cotidiano.id}`}
                            />
                        )
                    })}
                </div>
            </section>
            <HomeButton />

        </main>
    )
}

export default CotidianosDes