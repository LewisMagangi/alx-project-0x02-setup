import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div className="bg-white rounded shadow p-4 mb-4 w-full max-w-md">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="mb-2">{content}</p>
    <span className="text-sm text-gray-500">User ID: {userId}</span>
  </div>
);

export default PostCard;
