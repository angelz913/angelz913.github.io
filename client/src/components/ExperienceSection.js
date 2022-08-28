import React from 'react'

import SectionTitle from './SectionTitle'
import Experience from './Experience'

const ExperienceSection = (props) => {
    return (
        <section id="experience">
            <SectionTitle text="Experience"/>
            {props.experienceList.map((experience, key) => {
                return (
                    <Experience experience={experience} key={key} />
                )
            })}
        </section>
    )
}

export default ExperienceSection
