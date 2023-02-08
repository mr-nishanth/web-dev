import { useForm } from "react-hook-form";
import "../App.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// SCHEMA VALIDATION
const schema = yup.object().shape({
  fName: yup.string().required("First name is required"),
  lName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .integer("Age must be in integer")
    .positive("Age must be in positive")
    .required("Age is required"),
  password: yup
    .string()
    .min(4, "Min 4 Char")
    .max(50, "Max 50 Char")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  console.log({ errors });
  console.log({ isValid });

  return (
    <div className="App">
      <div className="title">Sign Up</div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
      >
        <input {...register("fName")} placeholder="First Name" />
        {errors?.fName && <p>{errors?.fName?.message}</p>}
        <input {...register("lName")} placeholder="Last Name" />
        {errors?.lName && <p>{errors?.lName?.message}</p>}
        <input {...register("email")} placeholder="Email" />
        {errors?.email && <p>{errors?.email?.message}</p>}
        <input {...register("age")} placeholder="Age" />
        {errors?.age && <p>{errors?.age?.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors?.password && <p>{errors?.password?.message}</p>}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
        />
        {errors?.confirmPassword && <p>{errors?.confirmPassword?.message}</p>}
        <input
          type="submit"
          value="Submit"
          id="submit"
          disabled={isDirty && !isValid}
        />
      </form>
    </div>
  );
};
export default SignUp;
