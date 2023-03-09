export const careersLoader = async () => {
  const res = await fetch(`http://localhost:4000/careers`);
  return res.json();
};

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);
  return res.json();
};
