import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const buttonAnimation = keyframes`
  from { opacity: 0; margin-top: 8px }
  to { opacity: 1; margin-top: 0 }
`;

const BackButtonStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${buttonAnimation};
  animation-duration: 1s;
  font-family: 'Roboto Regular';
  text-decoration: none;
  color: #000000;

  .arrowIcon {
    font-size: 2rem;
    color: #c5c5c5;
  }

  .label {
    font-size: 1.1rem;
  }
`;

export default function BackButton(props: any) {

  const to = props.to;

  return (
    <BackButtonStyle to={to}>
      <ArrowBackIcon className="arrowIcon"></ArrowBackIcon>
      {/* <p className="label">voltar</p> */}
    </BackButtonStyle>
  )
}