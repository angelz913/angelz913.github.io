import React from 'react'
import SectionTitle from './SectionTitle'
import Experience from './Experience'

const ExperienceSection = (props) => {
    return (
        <section id="experience" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6  m-3 p-5 border-round-md">
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
