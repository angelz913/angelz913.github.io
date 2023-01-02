import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = (props) => {
    return (
        <header className="nav flex flex-wrap justify-content-center py-3">
            {props.texts.map((text, key) => {
                return (
                    <div key={key}>
                        {text === "home" || text === "gallery" ? 
                        <Link to={"/" + text} className="flex sm:mx-4 md:mx-5 lg:mx-6 xl:mx-7"> {text} 
                        </Link> : 
                        <HashLink className="flex sm:mx-4 md:mx-5 lg:mx-6 xl:mx-7" to={"/#" + text}> {text} </HashLink>}
                    </div> 
                )
            })}
        </header>
    )
}

export default Navbar