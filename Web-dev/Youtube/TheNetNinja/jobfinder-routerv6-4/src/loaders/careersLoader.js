export const careersLoader = async () => {
  const res = await fetch(`http://localhost:4000/careers`);
  if (!res.ok) {
    throw new Error("Could not fetch that career");
  }

  return res.json();
};

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw new Error("Could not find that career");
  }

  return res.json();
};
