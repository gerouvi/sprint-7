import { ContainerFlex, Button } from './BudgetListFilters.styles';

const BudgetListFilters = ({ filters, setSortBy, setPattern }) => {
  return (
    <>
      <ContainerFlex>
        <span>Buscador </span>
        <input onChange={(e) => setPattern(e.target.value)}></input>
      </ContainerFlex>
      <ContainerFlex>
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
      </ContainerFlex>
    </>
  );
};

export default BudgetListFilters;
