// -------------------- Libraries ----------------------------------
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// ------------------- Components ----------------------------------
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// --------------------- Views --------------------------------------
// Main Views
import Home from './views/Home'
import Directas from './views/Directas'
import Indirectas from './views/Indirectas'
import Evaluaciones from './views/Evaluaciones'
import Complementarias from './views/Complementarias'
// Not found view
import NotFound from './views/NotFound'
// Complementarias
import Diagnostico from './views/Complementarias/Diagnostico'
import ComplementView from './views/Complementarias/ComplementView'
import TrabajoProyecto from './views/Complementarias/TrabajoProyecto'
// desarrolladas
import TareasDes from './views/Desarrollado/TareasDes'
import ProyectoDes from './views/Desarrollado/ProyectoDes'
import CotidianosDes from './views/Desarrollado/CotidianosDes'
import DesarrolladoView from './views/Desarrollado/DesarrolladoView'
// Evaluaciones
import Cotejos from './views/Evaluaciones/Cotejos'
import Pruebas from './views/Evaluaciones/Pruebas'
import EvaluacionesViews from './views/Evaluaciones/EvaluacionesViews'
// indirectas
import Clase from './views/Indirectas/Clase'
import Temarios from './views/Indirectas/Temarios'
import Adicional from './views/Indirectas/Adicional'
import AdicionalView from './views/Indirectas/AdicionalView'
// Enunciados
import EnunciadosView from './views/Enunciados/EnunciadosView'
import EnunciadoTareas from './views/Enunciados/EnunciadoTareas'
import EnunciadoProyecto from './views/Enunciados/EnunciadoProyecto'
import EnunciadosCotidianos from './views/Enunciados/EnunciadosCotidianos'
// Codigos ejemplos
import CodigosEjemplos from './views/Ejemplos/CodigosEjemplos'
import Ejemplo from './views/Ejemplos/Ejemplo'
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
                <Route path="/desarrollados/desarrollado/:id" element={<DesarrolladoView />} />
                {/* trabajos de evidencias indirectas */}
                <Route path='/indirectas/clase' element={<Clase />} />
                <Route path='/indirectas/temario' element={<Temarios />} />
                <Route path='/indirectas/adicional' element={<Adicional />} />
                {/* Archivos de evidencias directas */}
                <Route path='/indirectas/archivo/:id' element={<AdicionalView />} />
                {/* Archivos de evaluaciones y hojas de cotejos */}
                <Route path='/evaluacion/cotejos' element={<Cotejos />} />
                <Route path='/evaluacion/pruebas' element={<Pruebas />} />
                <Route path='/evaluacion/archivo/:id' element={<EvaluacionesViews />} />
                {/* Archivos y vistas de sección complementaria */}
                <Route path='/complementos/proyecto' element={<TrabajoProyecto />} />
                <Route path='/complementos/diagnostico' element={<Diagnostico />} />
                <Route path='/complementos/archivos/:id' element={<ComplementView />} />
                {/* Codigos Ejemplo */}
                <Route path='/directas/ejemplos' element={<CodigosEjemplos />} />
                <Route path='/directas/ejemplos/:id' element={<Ejemplo />} />
                {/* Not found route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default App