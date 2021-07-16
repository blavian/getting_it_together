import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

const SignupFormPage = ()=> {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);
  
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(sessionActions.signup({ username, email, password, image }))
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setImage(null);
      })
      .catch(async (res) => {
      
        if (res.data && res.data.errors) {
          newErrors = res.data.errors;
          setErrors(newErrors);
        }
      });
  };
const updateFile = (e) => {
  const file = e.target.files[0];
  if (file) setImage(file);
};
  return (
    <>
    <form  onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <label>
          <input type="file" onChange={updateFile} />
        </label>

      <button type="submit">
        <i className="fa fa-sign-in" aria-hidden="true"></i>
        Sign Up
      </button>
    </form>
       <div>
        {sessionUser && (
          <div>
            <h1>{sessionUser.username}</h1>
            <img
              style={{ width: "150px" }}
              src={sessionUser.profileImageUrl}
              alt="profile"
            />
          </div>
        )}
        </div>
      </>
  );
}

export default SignupFormPage;
