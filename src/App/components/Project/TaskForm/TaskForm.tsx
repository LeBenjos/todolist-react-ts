// Librairies
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Services
import { createTask } from "../../../services/tasks/createTasks.service";

// Constants
import { TaskFormText } from "../../../constants/texts/TaskFormText";
import { ErrorMessage } from "../../../constants/messages/ErrorMessage";

export default function TaskForm({ state, setOpenForm }: { state: any, setOpenForm: any }) {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { id } = useParams();
  console.log(id);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("");
    setTask(e.target.value);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!task) {
      setError(ErrorMessage.AUTH_INVALID_INPUT);
      return;
    }

    if (!id || !task) return;
    createTask(id, task, state);
    setOpenForm(false)
  };

  return (
    <form >
      <p className="error-p">{error}</p>
      <div className="taskForm">
        <div className="input-container">
          <input
            type="text"
            placeholder={TaskFormText.PLACEHOLDER}
            value={task}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="buttonCta" onClick={handleClick}>
          {TaskFormText.BUTTON_VALUE}
        </button>
      </div>
    </form>
  );
}
