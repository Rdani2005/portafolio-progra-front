import React from 'react'
import '../css/animation.css'


const NotFound = () => {
  return (
    <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
        <h1 className="animation rubberBand display-1">404</h1>
        <p>Not Found</p>
    </main>
  )
}

export default NotFound