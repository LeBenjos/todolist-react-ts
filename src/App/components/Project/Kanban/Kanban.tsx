import React from "react";

interface KanbanProps {
  state: string;
  tasks: any[];
}
export default function Kanban({ state, tasks }: KanbanProps) {
  return (
    <div className="Kanban">
      <span>{state}</span>
    </div>
  );
}
