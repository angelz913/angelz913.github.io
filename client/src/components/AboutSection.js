import React from 'react'
import SectionTitle from './SectionTitle'

const AboutSection = (props) => {
    return (
        <section id="about">
            <SectionTitle text="About Me" />
            {props.aboutTexts.map((aboutText, key) => {
                return <p key={key}>{aboutText}</p>
            })}
        </section>
    )
}

export default AboutSection