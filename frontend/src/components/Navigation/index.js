import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import styled from "styled-components"


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
const[open,setOpen] = useState('false')
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <MenuLink href="/signup">Sign Up</MenuLink>
      </>
    );
  }

  return (
    <Nav>
    <Logo href="">
    GettingIt<span>2gether</span>
    </Logo>
    <Hamburger onClick={()=>setOpen(!open)}>
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
const Nav = styled.div`
padding: 0 2 rem;
display: flex:
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;
`;

const Hamburger = styled.div`
display:none;
flex-direction:column;
cursor:pointer;
span{
  height:2px;
  width:25px;
  background:#7b7fda
  margin-bottom:4px;
  border-radius:5px;
}
@media(max-width:760px){
  display:flex;
}
`
const MenuLink = styled.a`
padding: 1rem 2rem;
cursor:pointer;
text-align:center;
text-decoration:none;
color:#67bc98;
transition: all 0.3s ease-in;
font-size:0.9 rem;
&:hover{
  color:#7b7fda
}
`;
const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position:relative;

`;
const Logo = styled.div`
padding:1 rem 0;
color:red;
text-decoration:none;
font-weight:800
`;



export default Navigation;
