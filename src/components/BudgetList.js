import BudgetListRow from './BudgetListRow';

const BudgetList = ({ allBudgets }) => {
  const budgetRows = allBudgets.map((budget) => {
    return <BudgetListRow key={budget.date} {...budget} />;
  });

  return <div>{budgetRows}</div>;
};

export default BudgetList;
