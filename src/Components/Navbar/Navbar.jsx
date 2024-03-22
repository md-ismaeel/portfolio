import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

    const [active, setActive] = useState(0);

    useEffect(() => {
        setActive(location.pathname)
    }, [location])

    return (
        <>
            <ul className='list-container' style={{ backgroundColor: "#294047", display: 'flex', color: 'white' }}>
                <li className='nav-list'>
                    <NavLink to="/" style={{ color: active === "/" ? '#FFDB70' : 'white' }}>About</NavLink>
                </li>
                <li className='nav-list'>
                    <NavLink to="/certificate" style={{ color: active === "/certificate" ? '#FFDB70' : 'white' }}>Certificate</NavLink>
                </li>
                <li className='nav-list'>
                    <NavLink to="/project" style={{ color: active === "/project" ? '#FFDB70' : 'white' }}>Project</NavLink>
                </li>
                <li className='nav-list'>
                    <NavLink to="/contact" style={{ color: active === "/contact" ? '#FFDB70' : 'white' }}>Contact</NavLink>
                </li>
            </ul>
        </>
    )
}
export default Navbar
