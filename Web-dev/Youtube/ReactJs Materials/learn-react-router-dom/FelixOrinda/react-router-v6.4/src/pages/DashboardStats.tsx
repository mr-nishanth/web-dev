import { useLoaderData, useNavigation } from "react-router-dom";
import { PostType } from "../typing";

const DashboardStats = () => {
  const { posts } = useLoaderData() as { posts: PostType[] };
  const navigation = useNavigation() as any;
  if (navigation.state === "loading") return <p>Loading...</p>;
  return (
    <div>
      <h1>DashboardStats</h1>
      <p className="text-gray-700">There are {posts?.length} posts</p>
    </div>
  );
};
export default DashboardStats;
