import React from 'react'
import ContactSection from './ContactSection'
import ProfilePicture from './ProfilePicture'
import SectionTitle from './SectionTitle'


const AboutSection = (props) => {
    return (
        <section id="about" title="About Me" className="justify-content-center sm:w-10 md:w-9 lg:w-8 xl:w-7 mx-3 mt-6 mb-3 p-5 border-round-md">
            <ProfilePicture src={props.pfp} />
            <ContactSection />
            <SectionTitle text="About"/>
            <p>
                Hi! My name is Angel Zhang. I am a 3rd year CS student at the University of Waterloo.
            </p>
        </section>
    )
}

export default AboutSection