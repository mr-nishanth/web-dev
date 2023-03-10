// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Create budget
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 60%`; // HSL value
};
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };

  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

// Create Expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };

  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

//================= Formatting =====================

// Format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, { style: "currency", currency: "USD" });
};

// Total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    //Check does the expense have the same ID as the budget ID that I Passed in, if it doesn't then just get out of there
    // check if (expense.id === budgetId) I Passed in
    if (expense.budgetId !== budgetId) return acc; // acc = 0

    // Add the current amount to my total
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// Formatting percentage
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// Formatting Date
export const formatDateToLocaleString = (epochNumber) => {
  return new Date(epochNumber).toLocaleDateString();
};

// Get all items from local storage

export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// Delete Item from local storage
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON, stringify(newData));
  }
  return localStorage.removeItem(key);
};
