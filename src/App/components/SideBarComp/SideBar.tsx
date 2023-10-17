import React from "react";
import "./SideBar.css";
import Logo from "../../assets/logo.svg";
import Projects from "./ProjectsComp/Projects";
import { signOut } from "firebase/auth";
import { auth } from "../../context/firebase";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div>
        <div className="sidebar-header">
          <img src={Logo} alt="Listly logo" width={"54px"} />
          <h1> Listly </h1>
        </div>
        <Projects />
      </div>
      <button type="button" onClick={() => signOut(auth)}>
        Se déconnecter
      </button>
    </div>
  );
}
