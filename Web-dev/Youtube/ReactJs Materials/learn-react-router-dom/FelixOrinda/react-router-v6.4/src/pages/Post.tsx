import { useLoaderData } from "react-router-dom";
import { PostType } from "../typing";

const Post = () => {
  const { post } = useLoaderData() as { post: PostType | undefined };
  // console.log({ post });
  return (
    <div className="p-10">
      {post ? (
        <div>
          <h1 className="font-bold uppercase ">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Post;
