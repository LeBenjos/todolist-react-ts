import { useContext, useEffect, useState } from "react";
import { getKanbans } from "../../services/kanbans/getKanban.service";
import { useParams } from "react-router-dom";
import { authContext } from "../../context/Auth";
// import { createTask } from "../../services/tasks/createTasks.service";
// import { deleteTasks } from "../../services/tasks/deleteTasks.service";
import Kanban from "./Kanban/Kanban";
import "./Project.css";
import { KanbanText } from "../../constants/texts/KanbanText";

export default function Project() {
  const [kanbanData, setKanbanData] = useState<any[]>([]);
  const { id } = useParams();
  const user = useContext(authContext);
  useEffect(() => {
    if (!id) return;
    getKanbans(id).then((res) => {
      console.log(res);
      setKanbanData(res);
    });
    // createTask(id, "tache");
  }, []);

  return (
    <div className="Project">
      {kanbanData.length ? (
        <div className="kanban-layout">
          <Kanban
            state={KanbanText.TODO}
            tasks={kanbanData.find((kanban) => kanban.state === KanbanText.TODO)}
          />
          <Kanban
            state={KanbanText.DOING}
            tasks={kanbanData.find((kanban) => kanban.state === KanbanText.DOING)}
          />
          <Kanban
            state={KanbanText.DONE}
            tasks={kanbanData.find((kanban) => kanban.state === KanbanText.DONE)}
          />
        </div>
      ) : undefined}
    </div>
  );
}
