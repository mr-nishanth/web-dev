import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useRef } from "react";
import { useFetcher } from "react-router-dom";
import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const focusRef = useRef();
  // Clear the Form
  const formRef = useRef();
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            id="newBudget"
            name="newBudget"
            ref={focusRef}
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
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark">
          <span>Create Budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </fetcher.Form>
    </div>
  );
};
export default AddBudgetForm;
