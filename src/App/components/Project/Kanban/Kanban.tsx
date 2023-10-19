// Librairies
import { useState } from "react";

// Constants
import { KanbanText } from "../../../constants/texts/KanbanText";

// Components
import TaskCard from "../TaskCard/TaskCard";
import TaskForm from "../TaskForm/TaskForm";

// Styles
import "./Kanban.css";

interface KanbanProps {
  state: KanbanText.TODO | KanbanText.DOING | KanbanText.DONE;
  tasks: any[];
  text: KanbanText.TODO_TEXT | KanbanText.DOING_TEXT | KanbanText.DONE_TEXT;
}

export default function Kanban({ state, tasks, text }: KanbanProps) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="Kanban">
      <div className="kanban-header">
        <span>{text}</span>
        <button
          className="buttonCta buttonAddTask"
          onClick={() => setOpenForm(!openForm)}
        >
          {openForm ? KanbanText.BACK : KanbanText.ADD_TASK}
        </button>
      </div>
      <div className="kanban-body">
        {openForm ? (
          <TaskForm state={state} setOpenForm={setOpenForm} />
        ) : !tasks?.length ? (
          <span>{KanbanText.NONE_TASK}</span>
        ) : (
          tasks.map((task, index) => (
            <TaskCard
              key={task + index}
              currentState={state}
              description={task}
            />
          ))
        )}
      </div>
    </div>
  );
}
