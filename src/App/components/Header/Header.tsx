// Librairies
import { useContext, useEffect, useState } from "react";

// Context
import { authContext } from "../../context/Auth.tsx";

// Services
import { get } from "../../services/get.ts";
import { getProjects } from "../../services/projects/getProjects.service.ts";

// Models
import { User } from "../../models/user.model.ts";
import { Project } from "../../models/project.model.ts";

// Components
import HeaderLeft from "./Side/HeaderLeft.tsx";
import HeaderRight from "./Side/HeaderRight.tsx";

// Styles
import "./header.css"

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
        <HeaderRight userData={userData} projects={projects} />
    </div>
}
