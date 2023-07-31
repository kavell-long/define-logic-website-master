import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import "../../publicStyles/colours.css";
import "../../publicStyles/fonts.css";
 
/*The navigation bar itself*/
export const Nav = styled.nav`
  background: var(--deepSeaGreen);
  height: 85px;
  display: flex;
  justify-content: space-evenly;
  z-index: 12;
  border-radius: 30px;
`;
 
/*Words on nav bar. light green border*/
export const NavLink = styled(Link)`
  color: white;
  font-size: 25px;
  font-family: EffraLt;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;
  border: 1mm ridge rgba(211, 220, 50, .6);
  &.active {
    color: var(--keppel);
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
 
/*Not used*/
export const Bars = styled(Link)`
  display: none;
  color: var(--tango);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
 
/*Area for the navigation "buttons" purple border*/
export const NavMenu = styled.div`
  display: flex;
  align-items: right;
  margin-right: -24px;
  border: 1mm ridge rgba(211, 20, 150, .6);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

/*Area for the sign in button. blue border*/
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  border: 1mm ridge rgba(11, 20, 50, .6);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
/*Sign in button itself */
export const NavBtnLink = styled(Link)`
  border-radius: 20px;
  background: #ffffff;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

/* Company logo */
export const Logo = styled.img`
margin 10px;
max-width: 180px;
height= auto;
`;

/*Black border */
export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  border: 1mm ridge black;
`;

/*White border */
export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  border: 1mm ridge white;
`;

/* https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/ */