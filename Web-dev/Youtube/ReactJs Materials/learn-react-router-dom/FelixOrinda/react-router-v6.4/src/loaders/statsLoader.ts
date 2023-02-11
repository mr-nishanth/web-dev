import { posts } from "../data/posts";
import { PostType } from "../typing";

export default function statsLoader() {
  return new Promise<{ posts: PostType[] }>((resolve) => {
    setTimeout(() => {
      resolve({ posts: posts.slice(0, 10) });
    }, 1000);
  });
}
