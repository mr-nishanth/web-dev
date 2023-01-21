import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000",
});

export const request = ({ ...options }) => {
  // Set auth  token

  // Below the token was fetched from the local storage
  client.defaults.headers.common.Authorization = `Bearer token`;
  // We defined the success callback
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add additional logging here

    // eg: redirect to login page , if the status code is 401

    // Make sure to return the error in end
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
