import React from 'react'
import SectionTitle from './SectionTitle'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedinIcon from '@mui/icons-material/LinkedIn'

const ContactSection = () => {
  return (
        // <section id="contact" className="sm:w-10 md:w-9 lg:w-7 xl:w-6 mt-3 ml-3 mr-3 mb-5 p-5 border-round-md min-w-full">
        //     <SectionTitle text="Contact" />
        //     <h3>Let's get in touch! </h3>
            <div className="contact flex justify-content-center mb-5" >
                <a href="mailto:anzhouzhang913@gmail.com" className="mr-1" id="emailIcon"><EmailIcon fontSize="large" /></a>
                <a href="https://github.com/angelz913" className="mx-1" id="githubIcon"><GitHubIcon fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/angelzhang913/" className="mx-1" id="linkedinIcon"><LinkedinIcon fontSize="large" /></a>
            </div>
        // </section>
    )
}

export default ContactSection