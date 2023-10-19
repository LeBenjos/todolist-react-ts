import { useContext, useEffect, useState } from "react";
import { getKanbans } from "../../services/kanbans/getKanban.service";
import { useParams } from "react-router-dom";
import { authContext } from "../../context/Auth";
// import { createTask } from "../../services/tasks/createTasks.service";
// import { deleteTasks } from "../../services/tasks/deleteTasks.service";
import Kanban from "./Kanban/Kanban";
import "./Project.css";
import { KanbanText } from "../../constants/texts/KanbanText";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../context/firebase";

export default function Project() {
  const [kanbanData, setKanbanData] = useState<any[]>([]);
  const { id } = useParams();
  const user = useContext(authContext);

  useEffect(() => {
    if (!id) return;

    onSnapshot(collection(db, "projects", id, "kanban"), (snapshot) => {
      const result: any[] = [];
      snapshot.docs.forEach((doc) => {
        console.log(doc.data(), doc.id);
        result.push({ state: doc.id, ...doc.data() });
      });
      setKanbanData(result);
    });
    // createTask(id, "tache");
  }, [id]);

  return (
    <div className="Project">
      {kanbanData.length ? (
        <div className="kanban-layout">
          <Kanban
            state={KanbanText.TODO}
            tasks={
              kanbanData.find((kanban) => kanban.state === KanbanText.TODO)
                .tasks
            }
            text={KanbanText.TODO_TEXT}
          />
          <Kanban
            state={KanbanText.DOING}
            tasks={
              kanbanData.find((kanban) => kanban.state === KanbanText.DOING)
                .tasks
            }
            text={KanbanText.DOING_TEXT}
          />
          <Kanban
            state={KanbanText.DONE}
            tasks={kanbanData.find((kanban) => kanban.state == "done").tasks}
            text={KanbanText.DONE_TEXT}
          />
        </div>
      ) : undefined}
    </div>
  );
}
