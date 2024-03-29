import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import {
  createBudget,
  createExpense,
  deleteItem,
  fetchData,
  wait,
} from "../helpers";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";
import { Link } from "react-router-dom";

// * Our Loader function
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
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

  if (_action === "createExpense") {
    try {
      //  Create Expense
      createExpense({
        name: values?.newExpense,
        amount: values?.newExpenseAmount,
        budgetId: values?.newExpenseBudget,
      });
      return toast.success(`Expense ${values?.newExpense} created!💵`);
    } catch (error) {
      throw new Error("There was a problem creating your expense.😔");
    }
  }

  if (_action === "deleteExpense") {
    try {
      //  Delete Expense
      deleteItem({
        key: "expenses",
        id: values?.expenseId,
      });
      return toast.success(`Expense deleted!`);
    } catch (error) {
      console.log({ error });
      throw new Error("There was a problem deleting your expense.😔");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
                <h2>Existing Budgets</h2>
                <div className="budgets">
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
                {expenses && expenses.length > 0 && (
                  <div className="grid-md">
                    <h2>Recent Expenses</h2>
                    <Table
                      key={expenses.id}
                      expenses={expenses
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .slice(0, 8)}
                    />
                    {expenses.length > 8 && (
                      <Link to={"expenses"} className="btn btn--dark">
                        View all expenses
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!🏃‍♂️</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};
export default Dashboard;
