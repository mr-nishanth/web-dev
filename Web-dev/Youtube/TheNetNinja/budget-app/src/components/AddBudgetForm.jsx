import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            id="newBudget"
            name="newBudget"
            placeholder="eg: Groceries"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            id="newBudgetAmount"
            name="newBudgetAmount"
            step="0.01"
            inputMode="decimal"
            placeholder="eg: $143"
            required
          />
        </div>
        <button type="submit" className="btn btn--dark">
          <span>Create Budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </Form>
    </div>
  );
};
export default AddBudgetForm;
