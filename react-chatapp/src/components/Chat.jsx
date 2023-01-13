import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Profile from "../img/profile.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <Link to="/profile">
            <img src={Profile} alt="" />
          </Link>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
