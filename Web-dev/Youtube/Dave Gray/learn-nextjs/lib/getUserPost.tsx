const getUserPost = async (userId: string) => {
  // { cache: "force-cache" } by default cache
  // { cache: "no-store" } never cache the data because always dynamical

  // { next: { revalidate: 60sec } }
  // ISR Incremental Static Regeneration
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to get all users");
  return res.json();
};

export default getUserPost;
