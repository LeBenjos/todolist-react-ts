import React, { useState } from "react";
import "./TaskCard.css";
import { ImagePath } from "../../../constants/paths/ImagePaths";
import { deleteTasks } from "../../../services/tasks/deleteTasks.service";
import { useParams } from "react-router-dom";

interface TaskCard {
  currentState: string;
  description: string;
}

export default function TaskCard({ currentState, description }: TaskCard) {
  const { id } = useParams();

  const handleDelete = () => {
    if (!id) return;
    deleteTasks(id, description, currentState);
  };
  return (
    <div className="TaskCard">
      <div className="main-card">
        <p>{description}</p>
        <button className="trashBtn" onClick={handleDelete}>
          <img src={ImagePath.TRASH} alt="Trash icon" />
        </button>
      </div>
    </div>
  );
}
