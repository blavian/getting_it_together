import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import styled from "styled-components"

const Navbar = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
background:yellow;
`
const hamburger = styled.div``




function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <Nav>
    <Logo href="">
    GettingIt<span>2gether</span>
    </Logo>
    <Hamburger>
      <span />
      <span />
      <span />
    </Hamburger>
    <Menu>
      <MenuLink href=''>About</MenuLink>
      <MenuLink href='/'> Home</MenuLink>
        {isLoaded && sessionLinks}
        <MenuLink href="">Contact</MenuLink>

    </Menu>      
      </Nav>
  );
}
const Nav = styled.div``;
const Hamburger = styled.div``;
const MenuLink = styled.div``;
const Menu = styled.div``;
const Logo = styled.div``;



export default Navigation;
