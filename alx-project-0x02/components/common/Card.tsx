import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border rounded-lg shadow p-4 mb-4 bg-white">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default Card;
