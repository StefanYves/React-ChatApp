import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFNk_-uiybtPQ/profile-displayphoto-shrink_100_100/0/1667525357903?e=1678924800&v=beta&t=ebt3HabcWFVNae6xX4FeSd3d45fOas-35-KUrcOMj2k"
          alt=""
        />
        <div className="userChatInfo">
          <span>Stefan</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
