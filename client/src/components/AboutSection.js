import React from 'react'
import ContactSection from './ContactSection'
import ProfilePicture from './ProfilePicture'
import SectionTitle from './SectionTitle'


const AboutSection = (props) => {
    return (
        <section id="about" title="About Me" className="justify-content-center sm:w-10 md:w-9 lg:w-8 xl:w-7 mx-3 mt-5 mb-3 p-5 border-round-md">
            <ProfilePicture src={props.pfp} />
            <ContactSection />
            <SectionTitle text="About"/>
            <p>
                Hello! I am Angel Zhang, a 3rd year Computer Science student at the University of Waterloo. I had completed internships as a Software Engineer at Huawei and as an IT support specialist at Tangam Systems. I am currently seeking Fall 2023 opportunities!
            </p>
            <p>
                During my free time, I also engage in these activities:
            </p>
            <ul>
                {props.hobbies.map((hobby, key) => {
                    return <li key={key}>{hobby}</li>
                })}
            </ul>
        </section>
    )
}

export default AboutSection