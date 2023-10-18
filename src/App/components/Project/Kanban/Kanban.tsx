import { useState } from "react";
import { KanbanText } from "../../../constants/texts/KanbanText";
import "./Kanban.css";
import TaskCard from "../TaskCard/TaskCard";
import TaskForm from "../TaskForm/TaskForm";

interface KanbanProps {
  state: KanbanText;
  tasks: any[];
}
export default function Kanban({ state, tasks }: KanbanProps) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="Kanban">
      <div className="kanban-header">
        <span>{state}</span>
        <button className="buttonCta buttonAddTask" onClick={() => setOpenForm(!openForm)} >
          { openForm ? 
            KanbanText.BACK :
            KanbanText.ADD_TASK
          }
        </button>
      </div>
      <div className="kanban-body">
        {openForm ? (
          <TaskForm state={state} />
        ) : !tasks.length ? (
          <span>{KanbanText.NONE_TASK}</span>
        ) : (
          tasks.map((task) => <TaskCard description={task.description} />)
        )}
      </div>
    </div>
  );
}
