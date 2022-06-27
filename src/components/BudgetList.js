import { useState } from 'react';
import { filterBudgetBySort } from '../lib/budgets/filterBudgets';
import BudgetListFilters from './BudgetListFilters';
import BudgetListRow from './BudgetListRow';

const BudgetList = ({ allBudgets }) => {
  const [filters, setFilters] = useState({
    sortBy: 0,
  });

  const setSortBy = (newSortBy) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: newSortBy,
    }));
  };

  const budgetsFiltereds = filterBudgetBySort(allBudgets, filters.sortBy);

  const budgetRows = budgetsFiltereds.map((budget) => (
    <BudgetListRow key={budget.date} {...budget} />
  ));

  return (
    <div>
      <BudgetListFilters filters={filters} setSortBy={setSortBy} />
      {budgetRows}
    </div>
  );
};

export default BudgetList;
