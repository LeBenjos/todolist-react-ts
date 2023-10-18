import { useContext, useEffect, useState } from "react";
import "./Projects.css";
import { getProjects } from "../../../services/projects/getProjects.service";
import { authContext } from "../../../context/Auth";
import { Link } from "react-router-dom";
import { ImagePath } from "../../../constants/paths/ImagePaths";
import { CtaText } from "../../../constants/texts/CtaText";
import { SideBarText } from "../../../constants/texts/SideBarText";
import { LoadingMessage } from "../../../constants/messages/LoadingMessage";
import { deleteProject } from "../../../services/projects/deleteProject.service";
import { compareArraysOfObjects } from "../../../services/functions/CompareArraysOfObjects";
import { Project } from "../../../models/project.model";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(authContext);

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    getProjects(user?.providerData[0].uid).then((res) => {
      setProjects(res);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    getProjects(user?.providerData[0].uid).then((res) => {
      if(projects && compareArraysOfObjects(res, projects as Project[])) return;
      setProjects(res);
      setIsLoading(false);
    });
  }, [projects]);

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
                <div className="project">
                  <Link to="/">
                    <img src={ImagePath.TRASH} alt="Trash" onClick={() => handleDelete(project.id)}/>
                  </Link>
                  <Link key={index} to={"/project/" + project.id}>
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
