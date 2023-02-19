import { useState } from "react";
import { request } from "../utils/axios-utils";
const initialRegister = { username: "", password: "" };
const Register = () => {
  const [register, setRegister] = useState(initialRegister);
  const handleRegister = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    console.log({ register });
    await request({
      url: "/register",
      method: "POST",
      data: register,
    });
    setRegister(initialRegister);
  };
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={registerUser}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="block w-full rounded-sm p-2 mb-2 border"
          value={register.username}
          onChange={handleRegister}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="block w-full rounded-sm p-2 mb-2 border"
          value={register.password}
          onChange={handleRegister}
        />
        <button className="bg-blue-500 text-white block w-full p-2 rounded-sm">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
