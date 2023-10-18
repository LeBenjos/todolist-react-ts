import { useContext, useEffect, useState } from "react";
import { get } from "../../services/get";
import { authContext } from "../../context/Auth";
import "./Layout.css";
import SideBar from "../../components/SideBarComp/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Layout() {
  const [userData, setUserData] = useState<any>();
  const [projectData, setProjectData] = useState<any>();
  const user = useContext(authContext);

  useEffect(() => {
    if (!user) return;

    get(user?.providerData[0].uid).then((res) => setUserData(res));
  }, []);

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
