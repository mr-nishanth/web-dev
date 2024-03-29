import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user?.name) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const User = async ({ params: { userId } }: Params) => {
  // NOTE : await not using because here parallel request
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  // WAY 1
  // const [user, userPost] = await Promise.all([userData, userPostData]);

  const user = await userData;

  if (!user?.name) return notFound();

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading... from suspense</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
};

export default User;

// Generate static parameters
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ userId: user.id.toString() }));
}
