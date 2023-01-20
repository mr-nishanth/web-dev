import axios from "axios";
import { useQuery } from "react-query";

/*
const fetchSuperHeroes = (heroID) => {
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};
export const useSuperHeroByID = (heroID) => {
  return useQuery(["super-hero", heroID], () => fetchSuperHeroes(heroID), {});
};
*/
const fetchSuperHeroes = ({ queryKey }) => {
  console.log({ queryKey });
  const heroID = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};
export const useSuperHeroByID = (heroID) => {
  // ["super-hero", heroID] -> queryKey
  return useQuery(["super-hero", heroID], fetchSuperHeroes);
};
