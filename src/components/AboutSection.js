import React from 'react'
import ContactSection from './ContactSection'
import ProfilePicture from './ProfilePicture'
import SectionTitle from './SectionTitle'
import pfp from '../assets/resource/pfp.jpg'

const intros = [
    "I am a senior Computer Science student at the University of Waterloo, \
    currently working at Cerebras Systems as a kernel engineer intern. \
    Previously, I have interned at AMD, SideFX and Huawei as SWE. \
    My interest lies in compiler development and computer architecture, \
    but I am also passionate about learning other technologies. ",

    "During my free time, I also enjoy taekwondo 🥋, \
    table tennis 🏓, photography 📷, playing the piano 🎹, \
    and arranging music 🎼. ",

    "I am currently open to 2025 New Grad opportunities. \
    Please feel free to reach out!",
]

const AboutSection = (props) => {
    return (
        <section id="about" title="About Me" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6 m-5 border-round-md">
            <ProfilePicture src={pfp} />
            <SectionTitle text="👋 Nice to meet you! I am Angel Zhang." className="text-center" />
            {intros.map((intro, key) => {
                return (
                    <p key={key} className="text-lg">
                        {intro}
                    </p>
                )
            })}
        <ContactSection></ContactSection>
        </section>
    )
}

export default AboutSection