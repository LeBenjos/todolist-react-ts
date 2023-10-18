import { useEffect, useState } from "react";
import { getKanbans } from "../../services/kanbans/getKanban.service";
import { useParams } from "react-router-dom";

export default function Project() {
  const [kanbanData, setKanbanData] = useState<any>([]);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getKanbans(id).then((res) => {
      setKanbanData(res);
    });
  }, []);
  return (
    <div>
      {kanbanData.length
        ? kanbanData.map((kanban, index) => {
            return <li key={index}>{kanban.state}</li>;
          })
        : undefined}
    </div>
  );
}
