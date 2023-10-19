import React, { useState } from "react";
import "./TaskCard.css";
import { ImagePath } from "../../../constants/paths/ImagePaths";
import { deleteTasks } from "../../../services/tasks/deleteTasks.service";
import { useParams } from "react-router-dom";
import { TaskFormText } from "../../../constants/texts/TaskFormText";
import { KanbanText } from "../../../constants/texts/KanbanText";

interface TaskCard {
  currentState: string,
  description: string,
}

export default function TaskCard({ currentState, description }: TaskCard) {
  const { id } = useParams();
  const state = [
    {state: KanbanText.TODO, text: KanbanText.TODO_TEXT},
    {state: KanbanText.DOING, text: KanbanText.DOING_TEXT},
    {state: KanbanText.DONE, text: KanbanText.DONE_TEXT},
  ];


  const handleDelete = () => {
    if (!id) return;
    deleteTasks(id, description, currentState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("yes")
  }

  return (
    <div className="TaskCard">
      <div className="main-card">
        <p>{description}</p>
        <div className="right-card">
          <button className="trashBtn" onClick={handleDelete}>
            <img src={ImagePath.TRASH} alt="Trash icon" />
          </button>
          <select name="pets" id="pet-select" defaultValue={currentState} onChange={handleChange}>
            {state.map((value, index) => {
              return <option key={index} value={value.state} >{value.text}</option>
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
