import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';

import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <main className="bg-dark vh-100 d-flex justify-content-center align-items-center p-5">
      <div className="container mt-5">
        <div className="glass">
          <div className="row">
            <div className="col-sm-6 my-4 d-flex justify-content-center">
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="col-sm-6 my-4 d-flex flex-column text-center justify-content-center">
              <h1>Daniel Ricardo Sequeira Campos</h1><br />
              <h5>Portafolio de Evidencias Programación</h5>
              <h6 className="mt-4">
                <SchoolIcon />:
                <span>
                  <a href="https://ctpcalleblancos.ed.cr/" className="white-text">CTP Calle Blancos</a>
                </span>
              </h6>
              <h6>
                <PhoneIcon />:
                <span>
                  <a href="tel:+50660145678" className='white-text'>6014-5678</a>
                </span>
              </h6>
              <h6>
                <EmailIcon />:
                <span>
                  <a href="mailto:dricardosc15@gmail.com" className="white-text">dricardosc15@gmail.com</a>
                </span>
              </h6>
            </div>
          </div>
        </div>


      </div>


    </main>
  )
}

export default Home