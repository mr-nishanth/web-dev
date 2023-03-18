import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import React from "react";

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
  const [user, userPost] = await Promise.all([userData, userPostData]);

  return (
    <>
      <h2>{user.name}</h2>
      <br />
    </>
  );
};

export default User;
