// Loader

import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";
import { createExpense, deleteItem, getAllMatchingItems } from "../helpers";

export async function budgetLoader({ params }) {
  const { id } = params;

  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: id,
  })[0]; // getAllMatchingItems return array , so we access {first element[0]}

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: id,
  });

  if (!budget) {
    throw new Error("The budget you're trying to find doesn't exist🥲");
  }

  return { budget, expenses };
}

// * Action
export async function budgetAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  console.log({ _action, values });

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
const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();
  return (
    <div className="grid-lg" style={{ "--accent": budget.color }}>
      <h1 className="h2">
        <span className="accent">{budget?.name}</span> Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} /> {/* Passing current budget */}
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span> Expenses
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
};
export default BudgetPage;
