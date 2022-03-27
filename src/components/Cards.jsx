import React from 'react'
import { Link } from 'react-router-dom'

import '../css/button.css'
const Cards = ({ imagen, titulo, contenido, link }) => {
    return (

        <div className="col-lg-4 mb-4">
            <div className="card bg-transparent glass">
                <img src={imagen} alt={titulo} className="card-img-top w-90 mx-auto rounded-3 mt-3" />
                <div className="card-body">

                    <h5 className="card-title bg-none">
                        {titulo}
                    </h5>
                    <p className="card-text">{contenido}</p>
                </div>
                <Link to={link} className="button w-50 mx-auto mb-3">
                    Ver más!
                </Link>
            </div>

        </div>

    )
}

export default Cards