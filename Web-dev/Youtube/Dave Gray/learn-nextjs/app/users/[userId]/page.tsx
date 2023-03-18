import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import React, { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

const User = async ({ params: { userId } }: Params) => {
  // NOTE : await not using because here parallel request
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  // WAY 1
  // const [user, userPost] = await Promise.all([userData, userPostData]);

  const user = await userData;

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
