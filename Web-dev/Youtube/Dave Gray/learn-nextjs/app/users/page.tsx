import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Users",
  description: "User description",
};

const Users = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  // console.log(users);
  if (users.length === 0) return notFound();
  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <br />
      {users &&
        users?.map((user) => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          );
        })}
    </section>
  );

  return <div>{content}</div>;
};

export default Users;
