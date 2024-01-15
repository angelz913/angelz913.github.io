import React from 'react'

const SectionTitle = (props) => {
    return (
        <h1 className={props.className + " text-2xl"}>{props.text}</h1>
    )
}

export default SectionTitle