import React from 'react'
// icons
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return (
        <footer className=" text-center text-white main-bg-color">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-floating m-1 text-white" href="https://www.facebook.com/danny.sequeira.961" role="button">
                        <FacebookRoundedIcon/>
                    </a>

                    <a className="btn btn-floating m-1 text-white" href="https://twitter.com/rdani2005/" role="button">
                        <TwitterIcon/>
                    </a>

                    <a className="btn btn-floating m-1 text-white" href="https://www.instagram.com/rdani2005/" role="button">
                        <InstagramIcon/>
                    </a>

                    <a className="btn btn-floating m-1 text-white" href="https://www.linkedin.com/in/rdani2005/" role="button">
                        <LinkedInIcon/>
                    </a>

                    <a className="btn btn-floating m-1 text-white" href="https://github.com/rdani2005" role="button">
                        <GitHubIcon/>
                    </a>
                </section>

            </div>
            <div className="text-center p-3">
                © 2022 Copyright&nbsp;
                <a className="text-white" href="https://mdbootstrap.com/">Danny Sequeira</a>
            </div>

        </footer>

    )
}

export default Footer