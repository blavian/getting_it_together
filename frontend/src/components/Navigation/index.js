import React,{useState} from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import styled from "styled-components"


function Navigation({ isLoaded }) {
const sessionUser = useSelector((state) => state.session.user);
const[isOpen,setIsOpen] = useState(false)
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
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="/"> Home</MenuLink>
        {isLoaded && sessionLinks}
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
}
export default Navigation;

const MenuLink = styled.a`
  color: #1d2d35;
  background: #ffffff
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  &:hover {
    text-decoration: underline;
    text-decoration-color: yellow;
    text-decoration-thickness: 0.3em;
    text-decoration-width: 0.5rem;
  }
`;

const Nav = styled.div`
padding: 0 2 rem;
display: flex:
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;
`;

const Logo = styled.a`
  padding: 1 rem 0;
  color: black;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
const Hamburger = styled.div`
display:none;
flex-direction:column;
max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
transition: max-height 0.3s ease-in;
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
`;








