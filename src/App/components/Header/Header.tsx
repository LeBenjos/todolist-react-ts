// Librairies
import { useContext, useEffect, useState } from "react";

// Context
import { authContext } from "../../context/Auth";

// Services
import { get } from "../../services/get";

// Models
import { User } from "../../models/user.model";
import { Project } from "../../models/project.model";

// Components
import HeaderLeft from "./Side/HeaderLeft";
import HeaderRight from "./Side/HeaderRight";

// Styles
import "./header.css"
import { getProjects } from "../../services/projects/getProjects.service";

export default function Header() {
    const [userData, setUserData] = useState<User | undefined>();
    const [projects, setProjects] = useState<Project[]>();
    const user = useContext(authContext);

    useEffect(() => {
        if (!user) return;
        get(user.providerData[0].uid).then((res) => setUserData(res as User));
        getProjects(user.providerData[0].uid).then((res) => setProjects(res as Project[]));
    }, []);


    return <div className="header-container">
        <HeaderLeft userData={userData} projects={projects} />
        <HeaderRight userData={userData} />
    </div>
}
