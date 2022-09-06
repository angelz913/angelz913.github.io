import React from 'react'
import SectionTitle from './SectionTitle'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedinIcon from '@mui/icons-material/LinkedIn'

const ContactSection = () => {
  return (
        <section id="contact" className="w-9 m-3 p-5 border-round-md">
            <SectionTitle text="Contact" />
            <h3>Let's get in touch!</h3>
            <a href="mailto:anzhouzhang913@gmail.com" className="mr-1" id="emailIcon"><EmailIcon /></a>
            <a href="https://github.com/angelz913" className="mx-1" id="githubIcon"><GitHubIcon /></a>
            <a href="https://www.divnkedin.com/in/angelzhang913/" className="mx-1" id="linkedinIcon"><LinkedinIcon /></a>
        </section>
    )
}

export default ContactSection