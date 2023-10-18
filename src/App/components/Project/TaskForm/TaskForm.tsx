// Librairies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Services
import { createTask } from "../../../services/tasks/createTasks.service";

// Constants
import { TaskFormText } from "../../../constants/texts/TaskFormText";

export default function TaskForm({state}: {state: any}) {
    const [task, setTask] = useState<string>();
    const { id } = useParams()
    console.log(id)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const handleClick = () => {
        if(!id || !task) return;
        createTask(id, task, state);
    }

    return <form className="taskForm">
        <div className="input-container">
            <input type="text" placeholder={TaskFormText.PLACEHOLDER} value={task} onChange={handleChange}/>
        </div>
        <button type="submit" className="buttonCta" onClick={handleClick}>{TaskFormText.BUTTON_VALUE}</button>
    </form>
}
