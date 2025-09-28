
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { UserProps } from "../interfaces";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

export async function getStaticProps() {
  const res = await fetch(USERS_API);
  const data = await res.json();
  type ApiUser = {
    name: string;
    email: string;
    address: string;
  };

  const users: UserProps[] = data.map((user: ApiUser) => ({
    name: user.name,
    email: user.email,
    address: user.address,
  }));
  return {
    props: { users },
  };
}

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
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
