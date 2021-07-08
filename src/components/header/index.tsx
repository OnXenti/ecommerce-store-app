import { useHistory } from 'react-router';
import styled from 'styled-components';
import BackButton from '../backButton';

const Container = styled.div`
  display: flex;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-family: 'Roboto Black';

  @media(max-width: 600px) {
    width: 100%;
  }

  @media(min-width: 600px) {
    width: 100%;
  }
`;

const Label = styled.div`
  
`;

export default function Header() {

  const history = useHistory();
  const STORE_PATH = '/store';

  return (
    <Container>
      {history.location.pathname !== STORE_PATH ? <BackButton to={'/store'} /> : <div></div>}
      <Label>Delivery</Label>
      {/* <Label>Vinicius</Label> */}
    </Container>
  );
}