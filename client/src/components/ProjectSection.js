import React from 'react'
import SectionTitle from './SectionTitle'
import Project from './Project'

const ProjectSection = (props) => {
    return (
        <section id="projects" className="justify-content-center sm:w-10 md:w-9 lg:w-7 xl:w-6 m-3 p-5 border-round-md">
            <SectionTitle text="Projects"/>
            {props.projects.map((project, key) => {
                return <Project project={project} key={key} />
            })}
        </section>
    )
}

export default ProjectSection