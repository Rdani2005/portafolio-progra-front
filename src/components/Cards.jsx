import React from 'react'
import { Link } from 'react-router-dom'

import '../css/button.css'
const Cards = ({ imagen, titulo, contenido, link }) => {
    return (

        <div className="col-lg-4 mb-4">
            <div className="card bg-transparent glass">
                <img src={imagen} alt={titulo} className="card-img-top" />
                <div className="card-body">

                    <h5 className="card-title bg-none">
                        {titulo}
                    </h5>
                    <p className="card-text">{contenido}</p>
                </div>
                <Link to={link} className="button w-25 mx-auto">
                    Ver más!
                </Link>
            </div>

        </div>

    )
}

export default Cards