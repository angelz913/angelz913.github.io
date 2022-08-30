import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = (props) => {
    return (
        <header className="flex flex-wrap justify-content-center py-3 nav">
            {props.texts.map((text, key) => {
                return (
                    <div key={key}>
                        {text === "home" || text === "gallery" ? <Link to={"/" + text} className="flex mx-5"> {text} </Link> :  <HashLink className="flex mx-5" to={"/#" + text}> {text} </HashLink>}
                    </div> 
                )
            })}
        </header>
    )
}

export default Navbar