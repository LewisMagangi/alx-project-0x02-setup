import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { useEffect, useState } from "react";
import { UserProps } from "../interfaces";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  useEffect(() => {
    fetch(USERS_API)
      .then(res => res.json())
      .then(data => {
        setUsers(data.map((user: any) => ({
          name: user.name,
          email: user.email,
          address: user.address,
        })));
      });
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {users.map((user, idx) => (
          <UserCard key={idx} {...user} />
        ))}
      </main>
    </>
  );
}
