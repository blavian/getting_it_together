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
    
        <NavLink exact to="/">
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </Nav>
  );
}

export default Navigation;
