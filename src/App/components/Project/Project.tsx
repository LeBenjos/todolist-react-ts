import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Kanban from "./Kanban/Kanban";
import "./Project.css";
import { KanbanText } from "../../constants/texts/KanbanText";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../context/firebase";
import { updateTask } from "../../services/tasks/updateTask.service";

export default function Project() {
  const [kanbanData, setKanbanData] = useState<any[]>([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    onSnapshot(collection(db, "projects", id, "kanban"), (snapshot) => {
      const result: any[] = [];
      snapshot.docs.forEach((doc) => {
        result.push({ state: doc.id, ...doc.data() });
      });
      setKanbanData(result);
    });

    // updateTask(id, "todo", "doing", "tache");
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
