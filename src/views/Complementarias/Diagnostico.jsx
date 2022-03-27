import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from '../../components/Cards'

const Diagnostico = () => {

    let [diagnosticos, setDiagnosticos] = useState([])

    let getData = async () => {
        let res = await axios.get('http://127.0.0.1:8000/api/complementarios/complementarios/')
        let data = res.data
        data = data.filter(dato => dato.tipo_trabajo === "DIAGNOSTICO")
        console.log(data);
        setDiagnosticos(data)
    }

    useEffect(() => { getData() }, [])


    return (
        <main className="d-flex justify-content-center align-items-center flex-column p-5 bg-dark text-center min-vh-100">
            <h1 className="display-1 mt-5">Diagnostico Aplicado</h1>
            <section className="mt-5">
                <h3>Aqui se enseña el Diagnostico Aplicado</h3>
            </section>
            <section className="container mt-5">
                <div className="row">
                    {diagnosticos.map((diagnostico, index) => {
                        return (
                            <Cards
                                key={index}
                                imagen={diagnostico.direccion_imagen}
                                titulo={diagnostico.titulo}
                                contenido={diagnostico.descripcion}
                                link={`/complementos/archivos/${diagnostico.id}`}
                            />

                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Diagnostico