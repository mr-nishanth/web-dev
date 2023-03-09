import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { createBudget, fetchData, wait } from "../helpers";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";

// * Our Loader function
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//* Action
export async function dashboardAction({ request }) {
  await wait();

  const data = await request.formData();
  // console.log({ data, request });
  // const userName = data.get("userName");
  const { _action, ...values } = Object.fromEntries(data);
  console.log({ _action, values });

  //~ Handle Multiple Form Submission
  if (_action === "newUser") {
    try {
      // Save to local-storage
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName} 👋`);
    } catch (error) {
      throw new Error("There was a problem creating your account.😔");
    }
  }

  if (_action === "createBudget") {
    try {
      //  Create budget
      createBudget({
        name: values?.newBudget,
        amount: values?.newBudgetAmount,
      });
      return toast.success(`Budget created!🤑`);
    } catch (error) {
      throw new Error("There was a problem creating your budget.😔");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? () : ()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};
export default Dashboard;
