import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import CareerList from "../components/CareerList";
const StyledLink = styled(Link)({
  textDecoration: "none",
});
const Career = () => {
  const careersData = useLoaderData();
  console.log({ careersData });
  return (
    <>
      <Typography variant="h3">Careers</Typography>
      {careerLoader &&
        careersData.map((career) => (
          //  ID used for dynamic routes
          <StyledLink to={career.id.toString()} key={career.id}>
            <CareerList {...career} />
          </StyledLink>
        ))}
    </>
  );
};

// Career Loader

export const careerLoader = async () => {
  const url = "http://localhost:3000/careers";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error("Job Not Found");
    console.log({ error });
  }
};
export default Career;
