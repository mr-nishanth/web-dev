import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (heroID) => {
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};

const DynamicParallelQueriesPage = ({ heroIds }) => {
  console.log({ heroIds });

  // const [result1, result2] = useQueries(
  const queryResult = useQueries(
    heroIds.map((id) => {
      return { queryKey: ["superhero", id], queryFn: () => fetchSuperHero(id) };
    })
  );

  // console.log({ result1, result2 });
  console.log({ queryResult });
  return (
    <div>
      <h1>DynamicParallelQueriesPage</h1>
      <h4>Super Heroes</h4>
    </div>
  );
};
export default DynamicParallelQueriesPage;
