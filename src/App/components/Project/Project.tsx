import React, { useEffect } from "react";
import { getKanbans } from "../../services/kanbans/getKanban.service";
import { useParams } from "react-router-dom";

export default function Project() {
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getKanbans(id);
  }, []);
  return <div>Project</div>;
}
