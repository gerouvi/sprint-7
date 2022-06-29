import { useState } from 'react';
import filterBudgets from '../lib/budgets/filterBudgets';
import BudgetListFilters from './BudgetListFilters';
import BudgetListRow from './BudgetListRow';

const BudgetList = ({ allBudgets }) => {
  console.log(allBudgets);
  const [filters, setFilters] = useState({
    sortBy: 0,
    pattern: '',
  });

  const setSortBy = (newSortBy) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: newSortBy,
    }));
  };

  const setPattern = (newPattern) => {
    setFilters((prev) => ({
      ...prev,
      pattern: newPattern,
    }));
  };

  const budgetsFiltereds = filterBudgets(
    allBudgets,
    filters.pattern,
    filters.sortBy
  );

  const budgetRows = budgetsFiltereds.map((budget) => (
    <BudgetListRow key={budget.date} {...budget} />
  ));

  return (
    <div>
      <BudgetListFilters
        filters={filters}
        setSortBy={setSortBy}
        setPattern={setPattern}
      />
      {budgetRows}
    </div>
  );
};

export default BudgetList;
