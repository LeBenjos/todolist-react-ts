// Libraries
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";

// Contexts
import { db } from "../../../context/firebase";
import { authContext } from "../../../context/Auth";

// Services
import { deleteProject } from "../../../services/projects/deleteProject.service";

// Constants
import { CtaText } from "../../../constants/texts/CtaText";
import { SideBarText } from "../../../constants/texts/SideBarText";
import { LoadingMessage } from "../../../constants/messages/LoadingMessage";

// Styles
import "./Projects.css";
import { ImagePath } from "../../../constants/paths/ImagePaths";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(authContext);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
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
    setIsLoading(false);
  }, []);

  const handleDelete = (id: string) => {
    if (!user || !id) return;
    deleteProject(id, user.providerData[0].uid);
  };

  return (
    <div className="Projects">
      <button onClick={() => setIsOpen(!isOpen)}>
        <div>
          <img src={ImagePath.FOLDER} alt="Folder icon" />
          <span>{SideBarText.PROJECTS}</span>
        </div>
        <img
          className="chevron-icon"
          src={isOpen ? ImagePath.CHEVRON_UP : ImagePath.CHEVRON_DOWN}
          alt="Chevron icon"
        />
      </button>
      <div className="projects-modal">
        <ul>
          {isOpen ? (
            projects?.length ? (
              projects.map((project, index) => (
                <div className="project" key={index}>
                  <Link to="/">
                    <img
                      src={ImagePath.TRASH}
                      alt="Trash"
                      onClick={() => handleDelete(project.id)}
                    />
                  </Link>
                  <Link to={"/project/" + project.id}>
                    <li className="project-name">{project.name}</li>
                  </Link>
                </div>
              ))
            ) : isLoading ? (
              <span>{LoadingMessage.LOADING_NAME}</span>
            ) : (
              <span>{SideBarText.EMPTY_PROJECT}</span>
            )
          ) : null}
        </ul>
      </div>
      {/* <Link to={"/add-project"}> */}
      <Link to={"/create-project"}>
        {/* TODO: Créer la constante dans Path */}
        <button type="button">+ {CtaText.ADD_PROJECT}</button>
      </Link>
      {/* </Link> */}
    </div>
  );
}
