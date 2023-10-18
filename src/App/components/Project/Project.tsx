import React, { useEffect, useState } from "react";
import { getKanbans } from "../../services/kanbans/getKanban.service";
import { useParams } from "react-router-dom";

export default function Project() {
  const [kanbanData, setKanbanData] = useState<any>();
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    setKanbanData(getKanbans(id));
  }, []);
  return <div>Project</div>;
}
