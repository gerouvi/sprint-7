import { useEffect, useReducer, useState } from 'react';
import {
  WrapperWebOptions,
  WrapperInput,
  LabelInput,
  InputNumber,
  AddButton,
  SubstractButton,
  InfoButton,
} from './Budget.styles';
import Modal from './Modal';

function Budget() {
  const { budgetForm, dispatchBudgetForm } = useBudgetForm();

  const [isModalOpen, setIsModalOpen] = useState({
    pages: false,
    langauges: false,
  });

  if (!budgetForm) return null;
  return (
    <>
      <p>Que vols fer?</p>
      <div>
        <input
          type="checkbox"
          id="web"
          checked={budgetForm.web.active}
          onChange={() =>
            dispatchBudgetForm({
              type: 'web_changed',
              value: !budgetForm.web.active,
            })
          }
        />
        <label htmlFor="web">Una pàgina web (500e)</label>
      </div>
      {budgetForm.web.active && (
        <WrapperWebOptions>
          <WrapperInput>
            <LabelInput>Número de pàgines</LabelInput>
            <AddButton
              onClick={() =>
                dispatchBudgetForm({
                  type: 'number_pages_changed',
                  value: budgetForm.pages.numberPages + 1,
                })
              }
            />
            <InputNumber
              value={budgetForm.pages.numberPages}
              onChange={(e) =>
                dispatchBudgetForm({
                  type: 'number_pages_changed',
                  value: e.target.value,
                })
              }
            ></InputNumber>
            <SubstractButton
              onClick={() =>
                dispatchBudgetForm({
                  type: 'number_pages_changed',
                  value: budgetForm.pages.numberPages - 1,
                })
              }
            />
            <InfoButton
              onClick={() =>
                setIsModalOpen((prev) => ({
                  ...prev,
                  pages: true,
                }))
              }
            >
              i
            </InfoButton>
            <Modal
              closeModal={() =>
                setIsModalOpen((prev) => ({
                  ...prev,
                  pages: false,
                }))
              }
              isOpen={isModalOpen.pages}
            >
              El número total de pàgines es: {budgetForm.pages.numberPages}
            </Modal>
          </WrapperInput>
          <WrapperInput>
            <LabelInput>Número de llenguatges</LabelInput>
            <AddButton
              onClick={() =>
                dispatchBudgetForm({
                  type: 'number_languages_changed',
                  value: budgetForm.pages.numberLanguages + 1,
                })
              }
            />
            <InputNumber
              value={budgetForm.pages.numberLanguages}
              onChange={(e) =>
                dispatchBudgetForm({
                  type: 'number_languages_changed',
                  value: e.target.value,
                })
              }
            ></InputNumber>
            <SubstractButton
              onClick={() =>
                dispatchBudgetForm({
                  type: 'number_languages_changed',
                  value: budgetForm.pages.numberLanguages - 1,
                })
              }
            />
            <InfoButton
              onClick={() =>
                setIsModalOpen((prev) => ({
                  ...prev,
                  langauges: true,
                }))
              }
            >
              i
            </InfoButton>
            <Modal
              closeModal={() =>
                setIsModalOpen((prev) => ({
                  ...prev,
                  langauges: false,
                }))
              }
              isOpen={isModalOpen.langauges}
            >
              El número total de llenguatges es:{' '}
              {budgetForm.pages.numberLanguages}
            </Modal>
          </WrapperInput>
        </WrapperWebOptions>
      )}
      <div>
        <input
          type="checkbox"
          id="seo"
          checked={budgetForm.seo.active}
          onChange={() =>
            dispatchBudgetForm({
              type: 'seo_changed',
              value: !budgetForm.seo.active,
            })
          }
        />

        <label htmlFor="seo">Una consultoria seo (300e)</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="googleAds"
          checked={budgetForm.googleAds.active}
          onChange={() =>
            dispatchBudgetForm({
              type: 'google_ads_changed',
              value: !budgetForm.googleAds.active,
            })
          }
        />
        <label htmlFor="googleAds">Una campanya de google ads (200e)</label>
      </div>
      <p>Preu: {budgetForm.totalPrice}&#8364;</p>
    </>
  );
}

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

    case 'all':
      return {
        ...action.value,
      };

    default:
      throw new Error('Error type not recognized');
  }
};

const INITIAL_BUDGET_FORM_VALUES = {
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
export default Budget;
