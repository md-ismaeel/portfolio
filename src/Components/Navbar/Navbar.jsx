import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";


const Navbar = () => {

    const location = useLocation();

    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setActive(location.pathname)
    }, [location])


    const NavItem = ({ to, label, active }) => (
        <li className={`nav-list`}>
            <NavLink to={to} style={{ color: active === to ? '#FFDB70' : 'white' }} >{label}</NavLink>
        </li>
    );

    return (
        <>
            <ul className='list-container' style={{ backgroundColor: "#294047", display: 'flex', color: 'white' }}>
                <NavItem to="/" label="About" active={active} />
                <NavItem to="/project" label="Project" active={active} />
                <NavItem to="/contact" label="Contact" active={active} />
                <NavItem to="/resume" label="Resume" active={active} />
            </ul>

            <div className='list-menu'>
                <div style={{ width: '150px', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <button className='menu-button' onClick={() => setShow(!show)} >{!show ? <GiHamburgerMenu /> : <MdCancel />}</button>
                </div>
                {show ? (
                    <ul className='menu-ul'>
                        <NavItem to="/" label="About" active={active} />
                        <NavItem to="/project" label="Project" active={active} />
                        <NavItem to="/contact" label="Contact" active={active} />
                        <NavItem to="/resume" label="Resume" active={active} />
                    </ul>
                ) : (
                    ""
                )}

            </div>
        </>
    )
}
export default Navbar;
