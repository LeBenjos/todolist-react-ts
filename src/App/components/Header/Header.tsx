// Librairies
import { useContext, useEffect, useState } from "react";

// Firebase
import { onSnapshot, query, collection, where } from "firebase/firestore";
import { db } from "../../context/firebase.tsx";

// Context
import { authContext } from "../../context/Auth.tsx";

// Services
import { get } from "../../services/get.ts";

// Models
import { User } from "../../models/user.model.ts";
import { Project } from "../../models/project.model.ts";

// Components
import HeaderLeft from "./Side/HeaderLeft.tsx";
import HeaderRight from "./Side/HeaderRight.tsx";

// Styles
import "./header.css";

export default function Header() {
  const [userData, setUserData] = useState<User | undefined>();
  const [projects, setProjects] = useState<Project[]>();
  const user = useContext(authContext);

  useEffect(() => {
    if (!user) return;
    get(user.providerData[0].uid).then((res) => setUserData(res as User));

    onSnapshot(
      query(
        collection(db, "projects"),
        where("participants", "array-contains", user.providerData[0].uid)
      ),
      (snapshot) => {
        const result: any[] = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setProjects([...result]);
      }
    );
  }, []);

  return (
    <div className="header-container">
      <HeaderLeft userData={userData} projects={projects} />
      <HeaderRight userData={userData} projects={projects} />
    </div>
  );
}
