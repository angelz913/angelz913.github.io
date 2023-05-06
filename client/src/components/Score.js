import React from 'react'
import { FilePdfFilled } from '@ant-design/icons'
import PDF from '../assets/pdfs/Nuclear_Magnetic_Resonance.pdf'

const Score = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href={PDF} target="_blank"><FilePdfFilled /> Notes</a>
        </article>
    )
}

export default Score