import React from 'react'
import SectionTitle from './SectionTitle'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const ContactSection = () => {
  return (
        <section id="contact" className="w-10 m-3 p-5 border-round-md">
            <SectionTitle text="Contact" />
            <h3>Let's get in touch!</h3>
            <EmailIcon />
            <GitHubIcon />
            <LinkedInIcon />
            <InstagramIcon />
        </section>
    ) 
}

export default ContactSection