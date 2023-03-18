const getAllUsers = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    next: { revalidate: 5 },
  });
  if (!res.ok) return undefined;
  return res.json();
};

export default getAllUsers;
