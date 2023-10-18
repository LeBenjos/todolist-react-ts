import "./SideBar.css";
import Projects from "./ProjectsComp/Projects";
import { signOut } from "firebase/auth";
import { auth } from "../../context/firebase";
import { ImagePath } from "../../constants/paths/ImagePaths";
import { TextAuth } from "../../constants/texts/TextAuth";
import { Link } from "react-router-dom";

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
