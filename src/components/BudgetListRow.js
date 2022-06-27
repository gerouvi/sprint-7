import {
  WrapperBudgetListRow,
  Table,
  Th,
  Td,
  TdSpan3,
} from './BudgetListRow.styles';

const BudgetListRow = ({
  web,
  seo,
  googleAds,
  pages,
  budgetCustomerName,
  budgetName,
  date,
  totalPrice,
}) => {
  return (
    <WrapperBudgetListRow>
      <p>Nom del client: {budgetCustomerName}</p>
      <p>Nom del pressupost: {budgetName}</p>
      <p>Dia del pressupost: {new Date(date).toLocaleDateString()}</p>
      <Table>
        <thead>
          <tr>
            <Th>Servei</Th>
            <Th>Quantitat</Th>
            <Th>Preu</Th>
            <Th>Total</Th>
          </tr>
        </thead>
        <tbody>
          {web.active && (
            <tr>
              <Td>Pàgina web</Td>
              <Td> - </Td>
              <Td>{web.price}&#8364;</Td>
              <Td>{web.price}&#8364;</Td>
            </tr>
          )}
          {pages.numberPages > 0 && (
            <tr>
              <Td>Número de pàgines</Td>
              <Td>{pages.numberPages}</Td>
              <Td>30&#8364;</Td>
              <Td>{pages.numberPages * 30}&#8364;</Td>
            </tr>
          )}
          {pages.numberLanguages > 0 && (
            <tr>
              <Td>Número de pàgines</Td>
              <Td> {pages.numberLanguages}</Td>
              <Td>30</Td>
              <Td> {pages.numberLanguages * 30}&#8364;</Td>
            </tr>
          )}
          {seo.active && (
            <tr>
              <Td>Consultoria seo</Td>
              <Td> - </Td>
              <Td>{seo.price}&#8364;</Td>
              <Td>{seo.price}&#8364;</Td>
            </tr>
          )}
          {googleAds.active && (
            <tr>
              <Td>Campanya a google ads</Td>
              <Td> - </Td>
              <Td>{googleAds.price}&#8364;</Td>
              <Td>{googleAds.price}&#8364;</Td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <Td> Preu total</Td>
            <TdSpan3 colSpan="3">{totalPrice}&#8364;</TdSpan3>
          </tr>
        </tfoot>
      </Table>
    </WrapperBudgetListRow>
  );
};

export default BudgetListRow;

//
