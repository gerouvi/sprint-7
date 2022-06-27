const filterBudgetsBySort = (budgets, sortBy) => {
  const newBudgetsReference = [...budgets];

  switch (sortBy) {
    case 0:
      return newBudgetsReference;
    case 1:
      return newBudgetsReference.sort((a, b) => {
        if (a.budgetName === b.budgetName) return 0;
        if (a.budgetName < b.budgetName) return -1;
        else return 1;
      });

    case 2:
      return newBudgetsReference.sort((a, b) => {
        const a1 = new Date(a.date);
        const b1 = new Date(b.date);
        if (a1 < b1) return -1;
        if (a1 > b1) return 1;
        else return 0;
      });

    default:
      return;
  }
};

const filterBudgetsByPattern = (allBudgets, pattern) => {
  const patternLowerCase = pattern.toLowerCase();

  return allBudgets.filter((budget) =>
    budget.budgetName.includes(patternLowerCase)
  );
};

const filterBudgets = (allBudgets, pattern, sortBy) => {
  let budgetsFiltereds = filterBudgetsByPattern(allBudgets, pattern);
  return filterBudgetsBySort(budgetsFiltereds, sortBy);
};

export default filterBudgets;
