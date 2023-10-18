import React from "react";

interface TaskCard {
  description: string;
}

export default function TaskCard({ description }: TaskCard) {
  return <div className="TaskCard">{description}</div>;
}
