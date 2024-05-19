import React from 'react'
import ContactSection from './ContactSection'
import ProfilePicture from './ProfilePicture'
import SectionTitle from './SectionTitle'
import pfp from '../assets/resource/pfp.png'


const intros = [
    "I am a fourth year CS student at the University of Waterloo, currently working at AMD as an AI compiler engineer intern. My journey also included internships at SideFX and Huawei.",
    "I am passionate about exploring new opportunities and am open to Fall 2024 internships and 2025 new grad positions!" 
]
    

const AboutSection = (props) => {
    return (
        <section id="about" title="About Me" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6 m-5 border-round-md">
            <ProfilePicture src={pfp} />
            <SectionTitle text="Nice to meet you! I am Angel Zhang." className="text-center" />
            {intros.map((intro, key) => {
                return (
                    <p key={key} className="text-center text-lg">
                        {intro}
                    </p>
                )
            })}
        <ContactSection></ContactSection>
        </section>
    )
}

export default AboutSection