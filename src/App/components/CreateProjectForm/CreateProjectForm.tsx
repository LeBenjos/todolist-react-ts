import { useContext, useState } from "react";
import "./CreateProjectForm.css";
import { ErrorMessage } from "../../constants/messages/ErrorMessage";
import { CtaText } from "../../constants/texts/CtaText";
import { createProjects } from "../../services/projects/createProjets.service";
import { authContext } from "../../context/Auth";

export default function CreateProjectForm() {
  const user = useContext(authContext);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState<string>("");

  // onClick={() => {
  //   createProjects("réel@forreal.com", "Recette").then((res) =>
  //     console.log(res)
  //   );
  // }}

  const handleProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("");
    setProjectName(e.target.value);
  };

  const addProject = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!projectName) {
      setError(ErrorMessage.AUTH_INVALID_INPUT);
      return;
    }

    if (!user) return;

    createProjects(user.providerData[0].email, projectName);
  };

  return (
    <div className="CreateProjectForm">
      <form>
        <p className="error-p">{error}</p>
        <div className="input-container">
          <label htmlFor="project-name">Nom du projet</label>
          <input
            className={error ? "error-input" : ""}
            required
            value={projectName}
            onChange={handleProjectName}
            type="text"
            name="project-name"
            id="project-name"
          />
        </div>
        <button onClick={addProject} className="buttonCta">
          {CtaText.ADD_PROJECT}
        </button>
      </form>
    </div>
  );
}
