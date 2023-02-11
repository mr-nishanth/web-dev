import { useForm } from "react-hook-form";

import "../App.css";
import "./index.css";
const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: initialValues });

  console.log({ errors });
  console.log({ watchFunctionCalled: watch() });

  // Only re-renders when the "username" field changes
  // watch("username")
  // watch("username", (value) => console.log("username changed", value));
  // const username = watch("username");

  return (
    <div className="App">
      <div className="title">Login</div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
      >
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: "username is required" })}
        />
        {errors?.username && <p>{errors?.username?.message}</p>}
        <input
          type="text"
          placeholder="Password"
          {...register("password", {
            required: "Lastname is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
          })}
        />
        {errors?.password && <p>{errors?.password?.message}</p>}
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};
export default Login;
