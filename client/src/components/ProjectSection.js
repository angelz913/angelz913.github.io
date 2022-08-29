import React from 'react'
import SectionTitle from './SectionTitle'
import Project from './Project'

const ProjectSection = (props) => {
  return (
    <section id="projects">
      <SectionTitle text="Projects"/>
      {props.projects.map((project, key) => {
        return <Project project={project} />
      })}
    </section>
  )
}

export default ProjectSection