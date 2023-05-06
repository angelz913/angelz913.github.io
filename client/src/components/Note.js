import React from 'react'
import { FilePdfFilled } from '@ant-design/icons'

const Note = (props) => {
    const courseCode = props.name.split(' ')[0].toLowerCase() + props.name.split(' ')[1]
    const pdf = require('../assets/pdfs/' + courseCode + '.pdf')
    return (
        <article>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <a href={pdf}>
                <FilePdfFilled /> Notes
            </a>
        </article>
    )
}

export default Note