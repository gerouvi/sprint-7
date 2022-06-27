import { useState } from 'react';
import { BudgetContainer } from './Budget.styles';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

function Budget() {
  const [allBudgets, setAllBudgets] = useState([]);

  return (
    <>
      <BudgetContainer>
        <BudgetForm setAllBudgets={setAllBudgets} />
        <BudgetList allBudgets={allBudgets} />
      </BudgetContainer>
    </>
  );
}

export default Budget;
