import React from 'react'

const Experience = (props) => {
    const experience = props.experience
    return (
        <div>
            <h3>{experience.position} @ {experience.company}</h3>
            <p>{experience.date}</p>
        </div>
    )
}

export default Experience