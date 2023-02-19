import axios from "axios";

const devServer = "http://localhost:3500/api/v1";
const client = axios.create({
  baseURL: devServer,
});

export const request = async ({ ...options }) => {
  // Set auth  token
  // Below the token was fetched from the local storage
  client.defaults.headers.common.Authorization = `${options.token}`;
  // console.log({ options });
  // We defined the success callback
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add additional logging here

    // eg: redirect to login page , if the status code is 401
    // console.log({ error });
    // Make sure to return the error in end
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
