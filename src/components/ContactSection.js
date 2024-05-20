import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const ContactSection = () => {
  const resume = require('../assets/pdfs/resume.pdf')
  return (
        <div className="contact flex justify-content-center mt-5 mb-2" >
            <a title="Email" href="mailto:anzhouzhang913@gmail.com" className="mr-1" id="emailIcon"><EmailIcon fontSize="large" /></a>
            <a title="GitHub" href="https://github.com/angelz913" className="mx-1" id="githubIcon"><GitHubIcon fontSize="large" /></a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/angelzhang913/" className="mx-1" id="linkedinIcon"><LinkedinIcon fontSize="large" /></a>
            <a title="Resume" href={resume} className="ml-1" id="resumeIcon"><DescriptionOutlinedIcon fontSize="large"/></a>
        </div>
    )
}

export default ContactSection