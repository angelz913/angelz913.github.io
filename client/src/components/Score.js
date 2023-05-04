import React from 'react'
import { FilePdfFilled } from '@ant-design/icons'

const Score = (props) => {
    return (
        <div>
            <img src="" alt="" />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a href="https://mui.com/material-ui/react-checkbox/"><FilePdfFilled /> Notes</a>
        </div>
    )
}

export default Score