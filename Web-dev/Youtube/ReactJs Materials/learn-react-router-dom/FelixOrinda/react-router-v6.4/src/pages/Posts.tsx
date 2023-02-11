import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { PostType } from "../typing";

const Posts = () => {
  const { posts } = useLoaderData() as { posts: PostType[] };
  const navigation = useNavigation() as any;
  // console.log(navigation.state);
  // console.log(navigation.location);
  if (navigation.state === "loading") return <p>Loading...</p>;
  return (
    <div>
      <h1 className="text-4xl mb-4">Posts</h1>
      <ol className="list-disc px-8 capitalize">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/dashboard/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Posts;
