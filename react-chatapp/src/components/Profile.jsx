import {
  deleteUser,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Back from "../img/back.png";
import { auth } from "../firebase";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const updateName = document.getElementById("updateName");
  const user = auth.currentUser;

  function update() {
    updateProfile(currentUser, {
      displayName: updateName.value,
    })
      .then(() => {
        console.log("Profile updated");
      })
      .catch((error) => {});
  }

  function updatePassword() {
    sendPasswordResetEmail(auth, currentUser.email)
      .then(() => {
        console.log("Email sent!");
      })
      .catch((error) => {});
  }

  function deleteProfile() {
    deleteUser(user)
      .then(() => {
        navigate("/login");
        console.log("User deleted");
      })
      .catch((error) => {});
  }

  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <div className="profileTitle">
          <Link to="/">
            <img src={Back} alt="" className="back" />
          </Link>
          <span className="profileText">
            {currentUser.displayName}'s Profile
          </span>
        </div>
        <img src={currentUser.photoURL} alt="" />
        <p>email: {currentUser.email}</p>
        <p>Current Username: {currentUser.displayName}</p>
        <label htmlFor="updateName">New Username</label>
        <input type="text" id="updateName" />
        <button onClick={update}>Update Username</button>
        <button onClick={updatePassword}>Send change password email</button>
        <button onClick={deleteProfile} className="delete">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
