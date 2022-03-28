import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import VistaObjetos from '../../components/VistaObjetos'
const DesarrolladoView = () => {

    let [desarrollado, setDesarrollado] = useState([])
    let { id } = useParams()


    const getData = async () => {
        const res = await axios.get(`https://portafolio-progra-back.herokuapp.com/api/desarrollados/desarrollados/desarrollado/${id}/`)
        let data = res.data
        console.log(data);
        setDesarrollado(data)
    }

    useEffect(() => { getData() }, [])

    return (
        <VistaObjetos imagen={desarrollado.direccion_imagen} titulo={desarrollado.titulo} descripcion={desarrollado.descripcion} direccion={desarrollado.direccion}/>
    )
}

export default DesarrolladoView