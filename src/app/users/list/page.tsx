import UserCard from "@/app/components/UserCard";
import React from "react";
import { User } from "@/app/utils/types";

const UsersList = async () => {
  const apiUrl = process.env.API_URL;

  const res = await fetch(`${apiUrl}/users`);
  const users = await res.json();

  return (
    <div className="p-4 m-4">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      <div className="space-y-4">
        {users.map((user: User) => (
          <UserCard key={user?.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
