import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFNk_-uiybtPQ/profile-displayphoto-shrink_100_100/0/1667525357903?e=1678924800&v=beta&t=ebt3HabcWFVNae6xX4FeSd3d45fOas-35-KUrcOMj2k"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFNk_-uiybtPQ/profile-displayphoto-shrink_100_100/0/1667525357903?e=1678924800&v=beta&t=ebt3HabcWFVNae6xX4FeSd3d45fOas-35-KUrcOMj2k"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
