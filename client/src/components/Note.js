import React from 'react'
import { FilePdfFilled } from '@ant-design/icons'

const Note = (props) => {
    return (
        <div>
            <img src="" alt="" />
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <a href="https://mui.com/material-ui/react-checkbox/"><FilePdfFilled /> Notes</a>
        </div>
    )
}

export default Note