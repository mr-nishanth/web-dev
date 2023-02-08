import { useForm } from "react-hook-form";
import "../App.css";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="App">
      <div className="title">Sign Up</div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
      >
        <input type="text" placeholder="First Name" />

        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Age" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};
export default SignUp;
