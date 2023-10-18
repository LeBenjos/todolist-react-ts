import React, { useState } from "react";
import { KanbanText } from "../../../constants/texts/KanbanText";
import { CtaText } from "../../../constants/texts/CtaText";
import { Link } from "react-router-dom";
import "./Kanban.css";
import TaskCard from "../TaskCard/TaskCard";

interface KanbanProps {
  state: "todo" | "doing" | "done";
  tasks: any[];
}
export default function Kanban({ state, tasks }: KanbanProps) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="Kanban">
      <div className="kanban-header">
        <span>{KanbanText[state]}</span>
        <button onClick={() => setOpenForm(true)}>{CtaText.ADD_TASK}</button>
      </div>
      <div className="kanban-body">
        {openForm ? (
          "form"
        ) : !tasks.length ? (
          <span>Aucune tâche</span>
        ) : (
          tasks.map((task) => <TaskCard description={task.description} />)
        )}
      </div>
    </div>
  );
}
