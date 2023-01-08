import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat-Rau610</span>
      <div className="user">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFNk_-uiybtPQ/profile-displayphoto-shrink_100_100/0/1667525357903?e=1678924800&v=beta&t=ebt3HabcWFVNae6xX4FeSd3d45fOas-35-KUrcOMj2k"
          alt=""
        />
        <span>Stefan</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
