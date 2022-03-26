// -------------------- Libraries ----------------------------------
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// ------------------- Components ----------------------------------
import Navbar from './components/Navbar'
// --------------------- Views --------------------------------------
import Home from './views/Home'
import Directas from './views/Directas'
import Indirectas from './views/Indirectas'
import Clase from './views/Indirectas/Clase'
import Evaluaciones from './views/Evaluaciones'
import Temarios from './views/Indirectas/Temarios'
import Adicional from './views/Indirectas/Adicional'
import Complementarias from './views/Complementarias'
import TareasDes from './views/Desarrollado/TareasDes'
import ProyectoDes from './views/Desarrollado/ProyectoDes'
import AdicionalView from './views/Indirectas/AdicionalView'
import EnunciadosView from './views/Enunciados/EnunciadosView'
import CotidianosDes from './views/Desarrollado/CotidianosDes'
import EnunciadoTareas from './views/Enunciados/EnunciadoTareas'
import DesarrolladoView from './views/Desarrollado/DesarrolladoView'
import EnunciadoProyecto from './views/Enunciados/EnunciadoProyecto'
import EnunciadosCotidianos from './views/Enunciados/EnunciadosCotidianos'

// CSS
import './css/app.css'

const App = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* Main routes */}
                <Route path="/" element={<Home />} />
                <Route path="/directas" element={<Directas />} />
                <Route path="/indirectas" element={<Indirectas />} />
                <Route path="/evaluacion" element={<Evaluaciones />} />
                <Route path="/complementos" element={<Complementarias />} />
                {/* Enunciados de evidencias directas */}
                <Route path="/enunciados/tareas" element={<EnunciadoTareas />} />
                <Route path="/enunciados/proyecto" element={<EnunciadoProyecto />} />
                <Route path="/enunciados/cotidianos" element={<EnunciadosCotidianos />} />
                {/* Trabajos de evidencias directas */}
                <Route path="/desarrollados/tareas" element={<TareasDes />} />
                <Route path="/desarrollados/proyecto" element={<ProyectoDes />} />
                <Route path="/desarrollados/cotidianos" element={<CotidianosDes />} />
                {/* ver archivos de evidencias directas */}
                <Route path="/enunciados/enunciado/:id" element={<EnunciadosView />} />
                <Route path="/enunciados/enunciado/:id" element={<EnunciadosView />} />
                <Route path="/desarrollados/desarrollado/:id" element={<DesarrolladoView />} />
                {/* trabajos de evidencias indirectas */}
                <Route path='/indirectas/clase' element={<Clase />} />
                <Route path='/indirectas/temario' element={<Temarios />} />
                <Route path='/indirectas/adicional' element={<Adicional />} />
                {/* Archivos de evidencias directas */}
                <Route path='/indirectas/archivo/:id' element={<AdicionalView />} />

            </Routes>
        </BrowserRouter>

    )
}

export default App