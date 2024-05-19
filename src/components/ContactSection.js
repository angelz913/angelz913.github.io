import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactSection = () => {
  return (
        <div className="contact flex justify-content-center mt-5 mb-2" >
            <a title="Email" href="mailto:anzhouzhang913@gmail.com" className="mr-1" id="emailIcon"><EmailIcon fontSize="large" /></a>
            <a title="GitHub" href="https://github.com/angelz913" className="mx-1" id="githubIcon"><GitHubIcon fontSize="large" /></a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/angelzhang913/" className="mx-1" id="linkedinIcon"><LinkedinIcon fontSize="large" /></a>
            {/* <a title="Resume" href="https://www.instagram.com/obtuseangle1052r/" className="ml-1" id="instagramIcon"><InstagramIcon fontSize="large"/></a> */}
        </div>
    )
}

export default ContactSection