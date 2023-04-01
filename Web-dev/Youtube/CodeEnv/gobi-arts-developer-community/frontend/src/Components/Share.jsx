import React from "react";
import "../Styles/share.scss";
import { user } from "../Images";
import { shareOptions } from "../Constants/dummy";
const Share = () => {
  return (
    <div className="share__container">
      <div className="share__top">
        <img src={user} alt={`Mr Nishanth Profile`} draggable={false} />
        <div className="input__container">
          <input type="text" placeholder={`What's on your mind?`} />
        </div>
      </div>
      <div className="share__bottom">
        <ul>
          {shareOptions.map((shareOption) => (
            <li key={shareOption}>
              <shareOption.icon></shareOption.icon>
            </li>
          ))}
        </ul>
        <button>Post</button>
      </div>
    </div>
  );
};

export default Share;
