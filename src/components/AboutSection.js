import React from 'react'
import ContactSection from './ContactSection'
import ProfilePicture from './ProfilePicture'
import SectionTitle from './SectionTitle'
import pfp from '../assets/resource/pfp.png'


const intros = [
    "I am a fourth year Computer Science student at the University of Waterloo. \
    I have previously interned at SideFX and Huawei, and I am currently seeking Summer 2024 internships!", 
    "Please scroll down to find more information about me!"
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
        </section>
    )
}

export default AboutSection