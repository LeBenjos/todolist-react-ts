// Librairies
import { useContext, useState } from "react";

// Services
import { createProjects } from "../../services/projects/createProjets.service";

// Context
import { authContext } from "../../context/Auth";

// Constants
import { FormText } from "../../constants/texts/FormText";
import { CtaText } from "../../constants/texts/CtaText";
import { ErrorMessage } from "../../constants/messages/ErrorMessage";

// Styles
import "./AddMemberForm.css";
import { useParams } from "react-router-dom";

export default function AddMemberForm() {
  const user = useContext(authContext);
  const [memberName, setMemberName] = useState("");
  const [error, setError] = useState<string>("");

  const handleMemberName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("");
    setMemberName(e.target.value);
  };

  const {id} = useParams()
  console.log(id)

  return (
    <div className="AddMemberForm">
      <form>
        <p className="error-p">{error}</p>
        <div className="input-container">
          <label htmlFor="project-name">{FormText.LABEL_USER_EMAIL}</label>
          <input
            className={error ? "error-input" : ""}
            required
            value={memberName}
            onChange={handleMemberName}
            type="text"
            name="project-name"
            id="project-name"
            placeholder={FormText.PLACEHOLDER_USER_EMAIL}
          />
        </div>
        <button onClick={addMember} className="buttonCta">
          {CtaText.ADD_USER}
        </button>
      </form>
    </div>
  );
}
