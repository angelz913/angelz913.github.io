import React from 'react'

const Project = (props) => {
    const project = props.project
    return (
        <article>
                <h3>{project.name}</h3>
                <div>
                    {project.tags.map((tag, key) => {
                        return <p key={key}>{tag}</p>
                    })}
                </div>
                <p>{project.description}</p>
        </article>
    )
}

export default Project