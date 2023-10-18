import "./SideBar.css";
import Projects from "./ProjectsComp/Projects";
import { signOut } from "firebase/auth";
import { auth } from "../../context/firebase";
import { ImagePath } from "../../constants/paths/ImagePaths";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div>
        <div className="sidebar-header">
          <img src={ImagePath.LOGO} alt="Listly logo" width={"54px"} />
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
