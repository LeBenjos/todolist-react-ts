// Librairies
import { Outlet } from "react-router-dom";

// Styles
import "./Layout.css";

// Components
import SideBar from "../../components/SideBarComp/SideBar.tsx";
import Header from "../../components/Header/Header.tsx";

export default function Layout() {
  return <div className="Layout">
    <SideBar />
    <div className="Main">
      <Header />
      <Outlet />
    </div>
  </div>
}
