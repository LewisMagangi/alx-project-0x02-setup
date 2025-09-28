import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="bg-white rounded shadow p-4 mb-4 w-full max-w-md">
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <p className="mb-2">Email: {email}</p>
    <div className="text-sm text-gray-600">
      <div>Address:</div>
      <div>{address.street}, {address.suite}</div>
      <div>{address.city}, {address.zipcode}</div>
    </div>
  </div>
);

export default UserCard;
