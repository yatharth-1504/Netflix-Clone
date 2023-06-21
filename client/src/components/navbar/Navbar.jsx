import React, { useState } from "react";
import "./NavBar.scss";
import { ArrowDropDown, Search, Notifications } from "@mui/icons-material";

export default function Navbar() {
  const [isSrcolled, setIsSrcolled] = useState(false);

  window.onscroll = () => {
    setIsSrcolled(window.scrollY === 0 ? false : true);
  };

  return (
    <div
      className="navbar"
      style={{
        background: isSrcolled
          ? "#0b0b0b"
          : `linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%)`,
      }}
    >
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <div className="icons">
            <Search className="icon" />
            <Notifications className="icon" />
            <img
              src="https://i.pinimg.com/564x/9c/ac/dc/9cacdc207e8997bf90a3daf9c8aaca80.jpg"
              alt="profile"
              className="profile"
            />
            <div className="options">
              <ArrowDropDown className="icon" />
              <div className="option">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
