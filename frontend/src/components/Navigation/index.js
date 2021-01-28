import React,{useState} from "react";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css"
import { NavLink } from "react-router-dom";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [isOpen, setIsOpen] = useState(false);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className = "signUp" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="nav">
        <NavLink className ='link' exact to="/">
          Home
        </NavLink>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;







