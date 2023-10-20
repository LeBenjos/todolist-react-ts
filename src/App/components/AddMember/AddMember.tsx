// Librairies
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

// Services
import { addMembers } from "../../services/projects/addMembers.service";

// Context
import { authContext } from "../../context/Auth";

// Constants
import { FormText } from "../../constants/texts/FormText";
import { CtaText } from "../../constants/texts/CtaText";
import { ErrorMessage } from "../../constants/messages/ErrorMessage";
import { SuccessMessage } from "../../constants/messages/SuccessMessage";

// Styles
import "./AddMemberForm.css";

export default function AddMemberForm() {
  const user = useContext(authContext);
  const { id } = useParams();
  const [memberName, setMemberName] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleMemberName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("");
    if (success) setSuccess("");
    setMemberName(e.target.value);
  };

  const addMember = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!memberName) {
      setError(ErrorMessage.AUTH_INVALID_INPUT);
      return;
    }

    if (!user || !id) return;
    addMembers(memberName, id).then((res) => {
      !res
        ? setError(ErrorMessage.MEMBER_NOT_FOUND)
        : setSuccess(SuccessMessage.SUCCESS_ADD_MEMBER);
    });
  };

  return (
    <div className="AddMemberForm">
      <form>
        {error ? <p className="error-p">{error}</p> : null}
        {success ? <p className="success-input">{success}</p> : null}
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
