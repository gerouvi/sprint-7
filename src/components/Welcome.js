import { Link } from 'react-router-dom';
import { WrapperApp, Btn } from './Welcome.styles';

const Welcome = () => {
  return (
    <WrapperApp>
      <h1>Benvingut!</h1>
      <p>Aquest es un missatge de benvinguda a la app de pressupostos!</p>
      <Btn>
        <Link to="/budget" style={{ textDecoration: 'none' }}>
          Fer pressupost
        </Link>
      </Btn>
    </WrapperApp>
  );
};

export default Welcome;
