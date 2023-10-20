// Libraries
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

// Component
import Projects from "./ProjectsComp/Projects";

// Context
import { auth } from "../../context/firebase";

// Constants
import { ImagePath } from "../../constants/paths/ImagePaths";
import { TextAuth } from "../../constants/texts/TextAuth";

// Styles
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div>
        <Link to="/" className="sidebar-header">
          <img src={ImagePath.LOGO} alt="Listly logo" width={"54px"} />
          <h1> Listly </h1>
        </Link>
        <Projects />
      </div>
      <button type="button" onClick={() => signOut(auth)}>
        {TextAuth.BUTTON_LOGOUT}
      </button>
    </div>
  );
}
