import React from 'react'
import { Tag } from 'antd'

const Project = (props) => {
    const project = props.project
    return (
        <article>
                <h3>{project.name}</h3>
                <div className="flex flex-wrap mb-2">
                    {project.tags.map((tag, key) => {
                        return <Tag key={key}>{tag}</Tag>
                    })}
                </div>
                <p>{project.description}</p>
        </article>
    )
}

export default Project