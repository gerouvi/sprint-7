import { useSearchParams } from 'react-router-dom';
import useAllBudgets from '../lib/hooks/useAllBudgets';
import { BudgetContainer } from './Budget.styles';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';
import useBudgetForm from '../lib/hooks/useBudgetForm';

function Budget() {
  const { budgetForm, dispatchBudgetForm } = useBudgetForm();
  const { allBudgets, setAllBudgets } = useAllBudgets();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams);

  return (
    <>
      <BudgetContainer>
        <BudgetForm
          budgetForm={budgetForm}
          dispatchBudgetForm={dispatchBudgetForm}
          setAllBudgets={setAllBudgets}
          setSearchParams={setSearchParams}
          searchParamsObj={searchParamsObj}
        />
        <BudgetList allBudgets={allBudgets} />
      </BudgetContainer>
    </>
  );
}

export default Budget;
