import React from 'react'
import Logo from '../assets/logo.png'
import { NavbarContainer, NavbarLogo } from './Navbar.style'
const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLogo src={Logo}/>
        </NavbarContainer>
    )
}

export default Navbar
