import { useParams } from "react-router-dom";
import { useSuperHeroByID } from "../hooks/useSuperHeroByID";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const {
    isLoading,
    isError,
    // isFetching,
    error,
    data: hero,
  } = useSuperHeroByID(heroId);
  // console.log({ hero });
  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h4>{error.message}</h4>;
  return (
    <div>
      <h1>RQSuperHeroPage ID : {hero?.data?.id}</h1>
      <span> Hero Name : {hero?.data?.name}</span> |{" "}
      <span> Alter Ego : {hero?.data?.alterEgo}</span>
    </div>
  );
};
export default RQSuperHeroPage;
