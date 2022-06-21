import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import VistaObjetos from '../../components/VistaObjetos'

const Ejemplo = () => {

    const { id } = useParams()

    let [ejemplo, setEjemplo] = useState([])

    useEffect(() => {

        let getData = async () => {
            const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/codigos/ejemplos/${id}/`)
            let data = res.data
            console.log(data);
            setEjemplo(data)
        }

        getData()
    }, [id])

    return (
        <VistaObjetos
            imagen={ejemplo.direccion_imagen}
            descripcion={ejemplo.descripcion}
            titulo={ejemplo.titulo}
            direccion={ejemplo.direccion}
        />
    )
}

export default Ejemplo