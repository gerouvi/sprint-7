import { useEffect, useState } from 'react';

const useAllBudgets = () => {
  const [allBudgets, setAllBudgets] = useState([]);

  useEffect(() => {
    if (allBudgets.length > 0)
      localStorage.setItem('allBudgets', JSON.stringify(allBudgets));
  }, [allBudgets]);

  useEffect(() => {
    const allBudgetsFromLocalStorage = JSON.parse(
      localStorage.getItem('allBudgets')
    );
    console.log(allBudgetsFromLocalStorage);
    setAllBudgets(allBudgetsFromLocalStorage);
  }, []);

  return {
    allBudgets,
    setAllBudgets,
  };
};

export default useAllBudgets;
