import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import VistaObjetos from '../../components/VistaObjetos'

const EnunciadosView = () => {

    const { id } = useParams()

    let [enunciado, setEnunciado] = useState([])

    useEffect(() => {
        let getData = async () => {
            const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/enunciados/enunciados/enunciado/${id}/`)
            let data = res.data
            console.log(data);
            setEnunciado(data)
        }
        getData()
    }, [id])

    return (
        <VistaObjetos imagen={enunciado.imagen} titulo={enunciado.titulo} descripcion={enunciado.descripcion} direccion={enunciado.direccion} />
    )
}

export default EnunciadosView