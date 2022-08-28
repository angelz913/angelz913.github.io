import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <header>
            {props.texts.map((text, key) => {
                return text === "home" || text === "gallery" ? <Link to={"/" + text} key={key}> {text} </Link> :  <a href={"/#" + text} key={key}> {text} </a>
            })}
        </header>
    )
}

export default Navbar