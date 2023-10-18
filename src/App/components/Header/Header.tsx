// Libraries
import { useContext, useEffect, useState } from "react";

// Context
import { authContext } from "../../context/Auth";

// Services
import { get } from "../../services/get";

// Models
import { User } from "../../models/user.model";

// Components
import HeaderLeft from "./Side/HeaderLeft";
import HeaderRight from "./Side/HeaderRight";

// Styles
import "./header.css"

export default function Header() {
    const [userData, setUserData] = useState<User | undefined>();
    const user = useContext(authContext);

    useEffect(() => {
        if (!user) return;
    
        get(user.providerData[0].uid).then((res) => setUserData(res as User));
      }, []);

    return <div className="header-container">
        <HeaderLeft userData={userData} />
        <HeaderRight userData={userData} />
    </div>
}
