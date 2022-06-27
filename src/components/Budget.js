import useAllBudgets from '../lib/hooks/useAllBudgets';
import { BudgetContainer } from './Budget.styles';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

function Budget() {
  const { allBudgets, setAllBudgets } = useAllBudgets();

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
