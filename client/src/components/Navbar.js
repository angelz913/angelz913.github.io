import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = (props) => {
    return (
        <header>
            {props.texts.map((text, key) => {
                return text === "home" || text === "gallery" ? <Link to={"/" + text} key={key}> {text} </Link> :  <HashLink to={"/#" + text} key={key}> {text} </HashLink>
            })}
        </header>
    )
}

export default Navbar