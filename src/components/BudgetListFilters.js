import { FiltersWrapper, Button } from './BudgetListFilters.styles';

const BudgetListFilters = ({ filters, setSortBy }) => {
  console.log(filters.sortBy === 0, filters.sortBy === 1, filters.sortBy === 2);
  return (
    <FiltersWrapper>
      <Button
        color={filters.sortBy !== 0 ? 'black' : 'gray'}
        onClick={() => setSortBy(0)}
      >
        Defecte
      </Button>
      <Button
        color={filters.sortBy !== 1 ? 'black' : 'gray'}
        onClick={() => setSortBy(1)}
      >
        Alfabeticàment
      </Button>
      <Button
        color={filters.sortBy !== 2 ? 'black' : 'gray'}
        onClick={() => setSortBy(2)}
      >
        Per data
      </Button>
    </FiltersWrapper>
  );
};

export default BudgetListFilters;
