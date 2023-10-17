import React from "react";
import "./SideBar.css";
import Logo from "../../assets/logo.svg";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="sidebar-header">
        <img src={Logo} alt="Listly logo" width={"54px"} />
        <h1> Listly </h1>
      </div>
    </div>
  );
}
