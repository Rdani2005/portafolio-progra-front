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
                <Link to={link} className="cssbuttons-io-button">
                    Ver más!
                    <div className="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                        </svg>
                    </div>
                </Link>
            </div>

        </div>

    )
}

export default Cards