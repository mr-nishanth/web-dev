//~ One queries depends on the result of another query. This is useful when you want to fetch data based on the result of another query.

import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelID = (channelID) => {
  return axios.get(`http://localhost:4000/channels/${channelID}`);
};
const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(
    ["user", email],
    () => fetchUserByEmail(email),
    {
      onSuccess: () => {
        console.log("fetchUserByEmail");
      },
    }
  );
  //   Step 1
  const channelID = user?.data?.channelID;

  console.log({ channelID });
  //   Step 2
  const { data: channel } = useQuery(
    ["courses", channelID],
    () => fetchCoursesByChannelID(channelID),
    {
      onSuccess: () => {
        console.log("fetchCoursesByChannelID");
      },
      // enabled:!!channelID => !! -> convert value to boolean
      enabled: !!channelID,
    }
  );
  return <div>DependentQueries</div>;
};
export default DependentQueries;

/**
 * We need to fetch the list of courses for a given email user
 * 1st query for the user who's email , given email then get the channel ID associated with that user , we need to fire the second query to get the list of courses for that channel ID
 */
