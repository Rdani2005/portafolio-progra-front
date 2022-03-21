import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Directas from './views/Directas'
import Indirectas from './views/Indirectas'
import Evaluaciones from './views/Evaluaciones'
import Complementarias from './views/Complementarias'
// CSS
import './css/app.css'

const App = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/directas" element={<Directas />} />
                <Route path="/indirectas" element={<Indirectas />} />
                <Route path="/evaluacion" element={<Evaluaciones />} />
                <Route path="/complementos" element={<Complementarias />} />
            </Routes>

        </BrowserRouter>

    )
}

export default App