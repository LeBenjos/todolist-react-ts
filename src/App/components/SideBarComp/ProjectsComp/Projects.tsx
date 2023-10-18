import { useContext, useEffect, useState } from "react";
import "./Projects.css";
import { getProjects } from "../../../services/projects/getProjects.service";
import { authContext } from "../../../context/Auth";
import { Link } from "react-router-dom";
import { ImagePath } from "../../../constants/paths/ImagePaths";
import { CtaText } from "../../../constants/texts/CtaText";
import { SideBarText } from "../../../constants/texts/SideBarText";
import { LoadingMessage } from "../../../constants/messages/LoadingMessage";

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
        {isOpen ? (
          projects?.length ? (
            projects.map((project, index) => (
              <Link key={index} to={"/project/" + project.id}>
                <li>{project.name}</li>
              </Link>
            ))
          ) : isLoading ? (
            <span>{LoadingMessage.LOADING_NAME}</span>
          ) : (
            <span>{SideBarText.EMPTY_PROJECT}</span>
          )
        ) : null}
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
