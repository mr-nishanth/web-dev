import { useForm } from "react-hook-form";

import "../App.css";

const Register = () => {
  const initialValues = {
    fName: "John",
    lName: "Doe",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: initialValues });

  console.log({ errors });
  console.log({ watchFunctionCalled: watch() });

  // Only re-renders when the "fName" field changes
  // watch("fName")
  // watch("fName", (value) => console.log("fName changed", value));
  // const fName = watch("fName");

  return (
    <div className="App">
      <div className="title">Sign Up</div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
      >
        <input
          type="text"
          placeholder="First Name"
          {...register("fName", { required: "Firstname is required" })}
        />
        {errors?.fName && <p>{errors?.fName?.message}</p>}
        <input
          type="text"
          placeholder="Last Name"
          {...register("lName", {
            required: "Lastname is required",
            minLength: {
              value: 4,
              message: "Lastname must be at least 4 characters",
            },
          })}
        />
        {errors?.lName && <p>{errors?.lName?.message}</p>}
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};
export default Register;
