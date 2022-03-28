import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import VistaObjetos from '../../components/VistaObjetos'
const ComplementView = () => {

    const { id } = useParams()

    let [complemento, setComplemento] = useState([])


    let getData = async () => {
        const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/complementarios/complementarios/complementario/${id}/`)
        let data = res.data
        console.log(data);
        setComplemento(data)
    }


    useEffect(() => { getData() }, [id])


    return (
        <VistaObjetos imagen={complemento.direccion_imagen} titulo={complemento.titulo} descripcion={complemento.descripcion} direccion={complemento.direccion}/>
    )
}

export default ComplementView