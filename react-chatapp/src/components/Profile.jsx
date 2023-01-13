import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Back from "../img/back.png";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const updateName = document.getElementById("updateName");

  function update() {
    updateProfile(currentUser, {
      displayName: updateName.value,
    })
      .then(() => {
        console.log("Profile updated");
      })
      .catch((error) => {});
  }

  //   TODO:FIX UPDATE EMAIL

  //   updateEmail(currentUser, "user@example.com")
  //     .then(() => {
  //       // Email updated!
  //       // ...
  //     })
  //     .catch((error) => {
  //       // An error occurred
  //       // ...
  //     });

  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <div className="profileTitle">
          <Link to="/">
            <img src={Back} alt="" className="back" />
          </Link>
          <span className="profileText">Profile</span>
        </div>
        <img src={currentUser.photoURL} alt="" />
        <p>email: {currentUser.email}</p>
        <p>Current Username: {currentUser.displayName}</p>
        <label htmlFor="updateName">New Username</label>
        <input type="text" id="updateName" />
        <button onClick={update}>Update Username</button>
      </div>
    </div>
  );
};

export default Profile;
