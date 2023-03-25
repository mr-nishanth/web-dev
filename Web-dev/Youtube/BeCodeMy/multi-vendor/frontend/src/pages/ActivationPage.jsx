import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";
import { toast } from "react-toastify";
const ActivationPage = () => {
  const { activationToken } = useParams();
  console.log({ activationToken });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (activationToken) {
      const activationRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activationToken,
          })
          .then((res) => {
            toast.success(`${res?.data?.user?.email} activated🎉`);
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      activationRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <>
          <p>Your token is expired!</p>
        </>
      ) : (
        <>
          <p>Your account has been created successfully!</p>
        </>
      )}
    </div>
  );
};

export default ActivationPage;
