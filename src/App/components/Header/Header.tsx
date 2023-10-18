import { useContext, useEffect, useState } from "react";
import { ImagePath } from "../../constants/paths/ImagePaths"
import { User } from "../../models/user.model"
import "./header.css"
import { authContext } from "../../context/Auth";
import { get } from "../../services/get";
import { LoadingMessage } from "../../constants/messages/LoadingMessage";

export default function Header() {
    const [userData, setUserData] = useState<any>();
    const user = useContext(authContext);
    console.log(userData)

    useEffect(() => {
        if (!user) return;
    
        get(user?.providerData[0].uid).then((res) => setUserData(res));
      }, []);

    return <div className="header-container">
        <div className="header-left">
           <h2>{userData ? "Nom du projet" : LoadingMessage.LOADING_PROJECT}</h2>
        </div>
        <div className="header-right">
            <div>
                <img src={userData ? ImagePath.DEFAULT_PICTURE_GREEN : ImagePath.DEFAULT_PICTURE_RED} alt="" />
                <h3>{userData ? userData.username : LoadingMessage.LOADING_NAME}</h3>
            </div>
            {userData && <button className="buttonCta">+ Nouvelle tache</button>}
        </div>
    </div>
}
