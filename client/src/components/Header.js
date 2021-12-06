import { Link } from "react-router-dom"
import React from 'react'
import ShowBook from "./ShowBook"


const Header = () => {
    return (
        <div>
            <Link to="/">
            <button className="btn btn-success">ShowBooks</button>
            </Link>
        </div>
    )
}

export default Header
