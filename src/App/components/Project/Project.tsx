import { useContext, useEffect, useState } from "react";
import { getKanbans } from "../../services/kanbans/getKanban.service";
import { Link, Navigate, useParams } from "react-router-dom";
import { deleteProject } from "../../services/projects/deleteProject.service";
import { authContext } from "../../context/Auth";
import { createTask } from "../../services/tasks/createTasks.service";
import { deleteTasks } from "../../services/tasks/deleteTasks.service";
import Kanban from "./Kanban/Kanban";

export default function Project() {
  const [kanbanData, setKanbanData] = useState<any>([]);
  const { id } = useParams();
  const user = useContext(authContext);
  useEffect(() => {
    if (!id) return;
    getKanbans(id).then((res) => {
      setKanbanData(res);
    });

    // createTask(id, "tache");
    deleteTasks(id, "tache", "todo");
  }, []);

  const handleDelete = () => {
    if (!user || !id) return;

    deleteProject(id, user.providerData[0].uid);
  };
  return (
    <div>
      <Link to="/">
        <button className="buttonCta" onClick={handleDelete}>
          Supprimer le projet
        </button>
      </Link>

      {kanbanData.length ? (
        <div className="kanban-layout">
          <Kanban
            state="todo"
            tasks={kanbanData.find((kanban) => kanban.state === "todo")}
          />
          <Kanban
            state="todo"
            tasks={kanbanData.find((kanban) => kanban.state === "todo")}
          />
          <Kanban
            state="todo"
            tasks={kanbanData.find((kanban) => kanban.state === "todo")}
          />
        </div>
      ) : undefined}
    </div>
  );
}
