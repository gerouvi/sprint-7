import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCustomerSearchParams = (budgetForm) => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const result = {};
    if (!budgetForm) return
    if (budgetForm.budgetCustomerName)
      result.customerName = budgetForm.budgetCustomerName;
    if (budgetForm.budgetName) result.budgetName = budgetForm.budgetName;
    if (budgetForm.web.active) result.web = true;
    if (budgetForm.seo.active) result.seo = true;
    if (budgetForm.googleAds.active) result.googleAds = true;
    if (budgetForm.pages.numberPages)
      result.pages = budgetForm.pages.numberPages;
    if (budgetForm.pages.numberLanguages)
      result.languages = budgetForm.pages.numberLanguages;

    setSearchParams(result);
  }, [budgetForm, setSearchParams]);

  return null;
};

export default useCustomerSearchParams;
