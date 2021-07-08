import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  font-family: 'Roboto Regular';
`;

export const OfferImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  max-width: 600px;
  align-self: center;
  border-radius: 10px;
`;

export const ButtonBackImg = styled.div`
  .icon {
    position: absolute;
    font-size: 8rem;
    top: 230px;
    left: 0px;
    color: #a8a8a8;
  }
`;

export const ButtonNextImg = styled.div`
  .icon {
    position: absolute;
    font-size: 8rem;
    top: 230px;
    right: 0px;
    color: #a8a8a8;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  color: #D5DDDF;
  margin-top: 2vh;
  margin-bottom: 16vh;

  p {
    margin: 0;
    color: #000000;
  }

  .info-label {
    text-align: start;
    font-weight: bold;
    margin-top: 1vh;
    margin-bottom: 2.2vh;
    font-size: 1rem;
  }

  .title {
    text-align: start;
    font-size: 2rem;
    font-family: 'Roboto Black';
  }

  .descricao {
    text-align: start;
    color: #bbbbbb;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .especificacao {
    width: 90%;
    font-size: 1rem;
    color: #7a7a7a;
  }
`;

export const Control = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #ffffff;
  padding: 25px 10px 20px 10px;
  position: fixed;
  bottom: 0;
`;

const buttonAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const AddCartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #ffffff;
  background-color: #B34B02;
  width: 90%;
  height: 60px;
  border-radius: 10px;
  animation-name: ${buttonAnimation};
  animation-duration: 1s;

  ::after {
    content: "comprar agora";
  }
`;

export const ControlPrice = styled.div`
  display: flex;
  justify-content: space-between;

  .controlPrice {
    display: flex;
    align-items: baseline;
    border: 1px solid black;
    border-radius: 10px;
    padding: 4px 10px 4px 10px;
  }

  .price {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .buttonChangeQtd {
    padding: 4px 10px 4px 10px;
  }

  .right {
    margin-right: 10px;
  }

  .left {
    margin-left: 10px;
  }
`;