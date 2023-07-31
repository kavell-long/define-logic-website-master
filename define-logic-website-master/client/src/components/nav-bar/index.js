import React from 'react';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Logo, LeftContainer, RightContainer } from './navbar_elements';

import LogoImg from '../../images/DLI_Logo_Landscape_Colour_Negative_Highres.png';

const Navbar = () => {
    return (
        <>
            <Nav>
                <LeftContainer>
                    <Logo src={LogoImg}></Logo>
                </LeftContainer>
                <RightContainer>
                    <NavMenu>
                        <NavLink to="/" activeStyle>Home</NavLink>
                        <NavLink to="/about" activeStyle>About</NavLink>
                        <NavLink to="/contact" activeStyle>Contact Us</NavLink>
                        <NavLink to="/blogs" activeStyle>Blogs</NavLink>
                        <NavLink to="/sign-up" activeStyle>Sign Up</NavLink>
                                         <NavBtn>
                        <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                    </NavBtn>   
                    </NavMenu>

                </RightContainer>
            </Nav>
        </>
    )
}

export default Navbar;