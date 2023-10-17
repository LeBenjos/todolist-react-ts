import { useContext, useEffect, useState } from "react";
import { get } from "../../services/get";
import { authContext } from "../../context/Auth";
import "./Layout.css";
import SideBar from "../../components/SideBarComp/SideBar";

export default function Layout() {
  const [userData, setUserData] = useState<any>();
  const user = useContext(authContext);

  useEffect(() => {
    if (!user) return;

    get(user?.providerData[0].uid).then((res) => setUserData(res));
  }, []);

  return (
    <div className="Layout">
      <SideBar />
      <div className="Main">blabla</div>
    </div>
  );
}
