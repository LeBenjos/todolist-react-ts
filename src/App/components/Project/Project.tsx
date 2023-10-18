import { useContext, useEffect, useState } from "react";
import { getKanbans } from "../../services/kanbans/getKanban.service";
import { Link, Navigate, useParams } from "react-router-dom";
import { deleteProject } from "../../services/projects/deleteProject.service";
import { authContext } from "../../context/Auth";

export default function Project() {
  const [kanbanData, setKanbanData] = useState<any>([]);
  const { id } = useParams();
  const user = useContext(authContext);
  useEffect(() => {
    if (!id) return;
    getKanbans(id).then((res) => {
      setKanbanData(res);
    });
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

      {kanbanData.length
        ? kanbanData.map((kanban, index) => {
            return <li key={index}>{kanban.state}</li>;
          })
        : undefined}
    </div>
  );
}
