import { Outlet } from "react-router-dom";

import "./Layout.css";

import SideBar from "../../components/SideBarComp/SideBar";
import Header from "../../components/Header/Header";

export default function Layout() {
  return (
    <div className="Layout">
      <SideBar />
      <div className="Main">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
