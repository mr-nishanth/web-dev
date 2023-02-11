// Type inference for the stats loader
import { LoaderFunctionArgs } from "react-router-dom";
import { posts } from "../data/posts";
import { PostType } from "../typing";

export default function postLoader({ params }: LoaderFunctionArgs) {
  return new Promise<{ post: PostType | undefined }>((resolve) => {
    setTimeout(() => {
      const post = posts.find((post) => String(post.id) === params.id);
      resolve({ post });
    }, 500);
  });
}
