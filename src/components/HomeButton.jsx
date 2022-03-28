import React from 'react'
import { Link } from 'react-router-dom'
const HomeButton = () => {
    return (
        <section className="container mt-5">
            <div className="d-flex justify-content-center align-items-center">
                <Link to="/" className="button mx-4">Home</Link>
            </div>
        </section>
    )
}

export default HomeButton