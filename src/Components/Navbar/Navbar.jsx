import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const [active, setActive] = useState(0);

    // useEffect(()=> {
    //     setActive(location.pathname)
    // })


    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        fontSize: '18px',
        opacity: '0.8'
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
