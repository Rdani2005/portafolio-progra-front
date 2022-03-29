import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios'
import VistaObjetos from '../../components/VistaObjetos'
const ComplementView = () => {

    const { id } = useParams()

    let [complemento, setComplemento] = useState([])


    useEffect(() => {

        let getComplement = async () => {
            const res = await fetch(`https://portafolio-progra-back.herokuapp.com/api/complementarios/complementarios/complementario/${id}/`)
            let data = await res.json()
            console.log(data);
            setComplemento(data)
        }

        getComplement()
    }, [id])






    return (
        <VistaObjetos imagen={complemento.direccion_imagen} titulo={complemento.titulo} descripcion={complemento.descripcion} direccion={complemento.direccion} />
    )
}

export default ComplementView