export const filterBudgetBySort = (users, sortBy) => {
  const newUsersReference = [...users];

  console.log(sortBy);

  switch (sortBy) {
    case 0:
      return newUsersReference;
    case 1:
      return newUsersReference.sort((a, b) => {
        if (a.budgetName === b.budgetName) return 0;
        if (a.budgetName < b.budgetName) return -1;
        else return 1;
      });

    case 2:
      return newUsersReference.sort((a, b) => {
        const a1 = new Date(a.date);
        const b1 = new Date(b.date);
        if (a1 < b1) return -1;
        if (a1 > b1) return 1;
        else return 0;
      });

    default:
      return newUsersReference;
  }
};
