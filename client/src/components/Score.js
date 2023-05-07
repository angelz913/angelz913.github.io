import React from 'react'
import { FilePdfFilled, PlayCircleFilled } from '@ant-design/icons'


const Score = (props) => {
    const title = props.title.split(' ').join('_')
    const pdf = require('../assets/pdfs/' + title + '.pdf')
    const video = require('../assets/videos/' + title + '.mp4')
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href={pdf}><FilePdfFilled /> Score</a>
            <br />
            <a href={video}><PlayCircleFilled /> Demo</a>
        </article>
    )
}

export default Score