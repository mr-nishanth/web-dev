import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary : {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque
          deleniti, facilis omnis ad exercitationem vel enim deserunt totam
          repellendus?
        </p>
      </div>
    </div>
  );
};
export default CareerDetails;
