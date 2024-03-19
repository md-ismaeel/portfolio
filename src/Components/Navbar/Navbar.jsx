import React from 'react'
import "../Navbar/Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
    }

    return (
        <>
            <ul className='list-container' style={{ backgroundColor: "#294047", display: 'flex', color: 'white' }}>
                <li>
                    <NavLink to="/" style={linkStyle}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/certificate" style={linkStyle}>Certificate</NavLink>
                </li>
                <li>
                    <NavLink to="/project" style={linkStyle}>Project</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
                </li>
            </ul>
        </>
    )
}
export default Navbar
