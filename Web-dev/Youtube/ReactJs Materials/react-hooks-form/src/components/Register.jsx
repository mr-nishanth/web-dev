import { useForm } from "react-hook-form";

import "../App.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="App">
      <div className="title">Sign Up</div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log({ data });
        })}
      >
        <input type="text" placeholder="First Name" {...register("fName")} />
        <input type="text" placeholder="Last Name" {...register("lName")} />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
};
export default Register;
