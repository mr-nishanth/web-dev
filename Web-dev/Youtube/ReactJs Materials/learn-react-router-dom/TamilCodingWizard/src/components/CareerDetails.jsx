import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  console.log({ id });
  const careerData = useLoaderData();
  console.log({ careerData });
  return (
    <>
      <Divider sx={{ mx: 20, my: 5 }} />
      <Box sx={{ p: 2 }}>
        <Typography variant="h4">{careerData.title}</Typography>
        <Typography variant="h6" color={"blue"}>
          {careerData.salary}
        </Typography>
        <Typography variant="body1" color={"grey"}>
          {careerData.location}
        </Typography>
      </Box>
    </>
  );
};

// Job Details
//* NOTE : In React Router Dom Loader we can't use the hook like useParams but we use params
export const jobDetails = async ({ params }) => {
  const url = `http://localhost:3000/careers/${params.id}`;
  console.log({ url });
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error("Job post not found");
  }
};
export default CareerDetails;
