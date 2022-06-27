import { useEffect, useReducer } from 'react';

const budgetFormReducer = (state, action) => {
  switch (action.type) {
    case 'web_changed': {
      if (!action.value) {
        return {
          ...state,
          web: {
            active: !state.web.active,
            price: state.web.price,
          },
          pages: {
            numberPages: 0,
            numberLanguages: 0,
          },
          totalPrice:
            state.totalPrice -
            state.web.price -
            state.pages.numberPages * 30 -
            state.pages.numberLanguages * 30,
        };
      }
      return {
        ...state,
        web: {
          active: !state.web.active,
          price: state.web.price,
        },
        totalPrice: state.totalPrice + state.web.price,
      };
    }

    case 'seo_changed': {
      return {
        ...state,
        seo: {
          active: !state.seo.active,
          price: state.seo.price,
        },
        totalPrice: state.seo.active
          ? state.totalPrice - state.seo.price
          : state.totalPrice + state.seo.price,
      };
    }

    case 'google_ads_changed':
      return {
        ...state,
        googleAds: {
          active: !state.googleAds.active,
          price: state.googleAds.price,
        },
        totalPrice: state.googleAds.active
          ? state.totalPrice - state.googleAds.price
          : state.totalPrice + state.googleAds.price,
      };

    case 'number_pages_changed': {
      if (action.value < 0 || isNaN(action.value)) return { ...state };
      return {
        ...state,
        pages: {
          numberPages: action.value,
          numberLanguages: state.pages.numberLanguages,
        },
        totalPrice:
          state.totalPrice - state.pages.numberPages * 30 + action.value * 30,
      };
    }

    case 'number_languages_changed': {
      if (action.value < 0 || isNaN(action.value)) return { ...state };
      return {
        ...state,
        pages: {
          numberPages: state.pages.numberPages,
          numberLanguages: action.value,
        },
        totalPrice:
          state.totalPrice -
          state.pages.numberLanguages * 30 +
          action.value * 30,
      };
    }

    case 'budget_name_changed':
      return {
        ...state,
        budgetName: action.value,
      };
    case 'budget_customer_name_changed':
      return {
        ...state,
        budgetCustomerName: action.value,
      };

    case 'date_changed':
      return {
        ...state,
        date: action.value,
      };

    case 'all':
      return {
        ...action.value,
      };

    case 'reset':
      return { ...INITIAL_BUDGET_FORM_VALUES };
    default:
      throw new Error('Error type not recognized');
  }
};

const INITIAL_BUDGET_FORM_VALUES = {
  budgetName: '',
  budgetCustomerName: '',
  web: {
    active: false,
    price: 500,
  },
  seo: {
    active: false,
    price: 300,
  },
  googleAds: {
    active: false,
    price: 200,
  },
  pages: {
    numberPages: 0,
    numberLanguages: 0,
  },
  date: '',
  totalPrice: 0,
};

const useBudgetForm = () => {
  const [budgetForm, dispatchBudgetForm] = useReducer(budgetFormReducer, null);

  useEffect(() => {
    if (budgetForm)
      localStorage.setItem('budgetFormValues', JSON.stringify(budgetForm));
  }, [budgetForm]);

  useEffect(() => {
    const budgetFormValues = JSON.parse(
      localStorage.getItem('budgetFormValues')
    );
    if (!budgetFormValues)
      dispatchBudgetForm({ type: 'all', value: INITIAL_BUDGET_FORM_VALUES });
    if (budgetFormValues)
      dispatchBudgetForm({ type: 'all', value: { ...budgetFormValues } });
  }, []);

  return {
    budgetForm,
    dispatchBudgetForm,
  };
};

export default useBudgetForm;
