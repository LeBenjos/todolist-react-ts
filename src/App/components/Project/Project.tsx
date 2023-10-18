import { useContext, useEffect, useState } from "react";
import { getKanbans } from "../../services/kanbans/getKanban.service";
import { useParams } from "react-router-dom";
import { authContext } from "../../context/Auth";
// import { createTask } from "../../services/tasks/createTasks.service";
// import { deleteTasks } from "../../services/tasks/deleteTasks.service";
import Kanban from "./Kanban/Kanban";
import "./Project.css";

export default function Project() {
  const [kanbanData, setKanbanData] = useState<any[]>([]);
  const { id } = useParams();
  const user = useContext(authContext);
  useEffect(() => {
    if (!id) return;
    getKanbans(id).then((res) => {
      setKanbanData(res);
    });

    // createTask(id, "tache");
    // deleteTasks(id, "tache", "todo");
  }, []);

  return (
    <div className="Project">
      {kanbanData.length ? (
        <div className="kanban-layout">
          <Kanban
            state="todo"
            tasks={kanbanData.find((kanban) => kanban.state === "todo")}
          />
          <Kanban
            state="doing"
            tasks={kanbanData.find((kanban) => kanban.state === "doing")}
          />
          <Kanban
            state="done"
            tasks={kanbanData.find((kanban) => kanban.state === "done")}
          />
        </div>
      ) : undefined}
    </div>
  );
}
