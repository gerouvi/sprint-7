import { useState } from 'react';

import Modal from './Modal';
import {
  WrapperWebOptions,
  WrapperInput,
  LabelInput,
  InputNumber,
  AddButton,
  SubstractButton,
  InfoButton,
  PersonalData,
  Btn,
  Warning,
} from './BudgetForm.styles';
import useBudgetForm from '../lib/hooks/useBudgetForm';

const BudgetForm = ({ setAllBudgets }) => {
  const { budgetForm, dispatchBudgetForm } = useBudgetForm();

  const [isModalOpen, setIsModalOpen] = useState({
    pages: false,
    langauges: false,
  });

  if (!budgetForm) return null;

  console.log(budgetForm);

  const isFormValid =
    budgetForm.budgetName &&
    budgetForm.budgetCustomerName &&
    budgetForm.totalPrice;

  return (
    <div>
      <p>Que vols fer?</p>
      <PersonalData>
        <div>
          <label>Nom d'usuari</label>
          <input
            value={budgetForm.budgetCustomerName}
            onChange={(e) =>
              dispatchBudgetForm({
                type: 'budget_customer_name_changed',
                value: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Nom del pressupost</label>
          <input
            value={budgetForm.budgetName}
            onChange={(e) =>
              dispatchBudgetForm({
                type: 'budget_name_changed',
                value: e.target.value,
              })
            }
          />
        </div>
      </PersonalData>
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
      <Btn
        disabled={!isFormValid}
        onClick={() => {
          const date = new Date().toISOString();
          dispatchBudgetForm({
            type: 'date_changed',
            value: date,
          });
          setAllBudgets((prev) => [...prev, { ...budgetForm, date }]);
          dispatchBudgetForm({ type: 'reset' });
        }}
      >
        Crear pressupost
      </Btn>
      <Warning>
        {!budgetForm.budgetCustomerName && "Nom d'usuari requerit"}
      </Warning>
      <Warning>
        {!budgetForm.budgetName && 'Nom del pressupost requerit'}
      </Warning>
      <Warning>
        {budgetForm.totalPrice === 0 && 'Cap opció seleccionada'}
      </Warning>
    </div>
  );
};
export default BudgetForm;
