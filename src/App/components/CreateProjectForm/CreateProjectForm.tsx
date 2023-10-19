import { useContext, useState } from "react";
import "./CreateProjectForm.css";
import { ErrorMessage } from "../../constants/messages/ErrorMessage";
import { CtaText } from "../../constants/texts/CtaText";
import { createProjects } from "../../services/projects/createProjets.service";
import { authContext } from "../../context/Auth";
import { FormText } from "../../constants/texts/FormText";
import { Link } from "react-router-dom";
import { SuccessMessage } from "../../constants/messages/SuccessMessage";

export default function CreateProjectForm() {
  const user = useContext(authContext);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");


  const handleProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("");
    if (success) setSuccess("");
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
    setSuccess(SuccessMessage.CREATE_PROJECT);
  };

  return (
    <div className="CreateProjectForm">
      <form>
        <p className="error-p">{error}</p>
        <p className="success-input">{success}</p>
        <div className="input-container">
          <label htmlFor="project-name">{FormText.PROJECT_NAME}</label>
          <input
            className={error ? "error-input" : ""}
            required
            value={projectName}
            onChange={handleProjectName}
            type="text"
            name="project-name"
            id="project-name"
            placeholder={FormText.PLACEHOLDER_PROJECT_NAME}
          />
        </div>
        <Link to="/">
          <button onClick={addProject} className="buttonCta">
            {CtaText.ADD_PROJECT}
          </button>
        </Link>
      </form>
    </div>
  );
}
