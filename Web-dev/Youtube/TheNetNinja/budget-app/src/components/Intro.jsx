import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";
import { useFetcher } from "react-router-dom";
const Intro = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <fetcher.Form method="post">
          <input
            type="text"
            name="userName"
            placeholder="What is your name ?"
            aria-label="What is your name ?"
            autoComplete="given-name"
            required
          />
          <input type="hidden" name="_action" value="newUser" />
          <button
            type="submit"
            className="btn btn--dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Creating Account ➡️ </span>
            ) : (
              <>
                <span>Create Account</span> <UserPlusIcon width={20} />
              </>
            )}
          </button>
        </fetcher.Form>
      </div>
      <img
        src={illustration}
        alt="Person with money [Illustration]"
        width={600}
      />
    </div>
  );
};
export default Intro;
