import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = (props) => {
    return (
        <header className="nav flex flex-wrap justify-content-center py-3">
            {props.titles.map((title, key) => {
                return (
                    <div key={key}>
                        {title === "home" || title === "articles" || title === "gallery" ?
                        <Link to={"/" + title}
                            className="flex sm:mx-4 md:mx-5 lg:mx-6 xl:mx-7 text-base"> {title}
                        </Link> :
                        <HashLink
                            className="flex sm:mx-4 md:mx-5 lg:mx-6 xl:mx-7 text-base"
                            to={"/#" + title}> {title}
                        </HashLink>}
                    </div>
                )
            })}
        </header>
    )
}

export default Navbar