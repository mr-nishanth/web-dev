import { createContext, useEffect, useState } from "react";
import { request } from "../utils/axios-utils";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "",
    id: "",
  });

  useEffect(() => {
    request({
      url: "/profile",
      method: "GET",
    })
      .then((res) => {
        const { username, id } = res?.data;
        console.log({ username, id });
        setUserData({ username, id });
      })
      .catch((err) => {});
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
