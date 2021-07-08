import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vh;
  width: 100%;
  font-family: 'Roboto Regular';
  
  p {
    margin: 0;
    font-family: 'Roboto Regular';
  }

  .produtos {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
  }

  .taxaEntrega {
    display: flex;
    padding-left: 16px;
    padding-top: 20px;
    margin-top: 4vh;
    height: 10vh;
    background-color: #f3f3f3;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .descontos {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4vh;
    height: 10vh;
    background-color: #f3f3f3;
    border-radius: 10px;
  }

  .finalizar {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    margin-top: 4vh;
    height: 20vh;
    border: 1px solid black;

    background-color: #733001;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  }

  .resume {
    display: flex;
    padding-left: 6vh;
    padding-top: 2vh;

    width: 100%;
    height: 50%;
    box-sizing: border-box;
  }

  .control {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 50%;
    box-sizing: border-box;
  }
`;

export const Itens = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
`;

export const FinalizarButton = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #ffffff;
  background-color: #B34B02;
  width: 90%;
  height: 60px;
  border-radius: 10px;

  position: fixed;
  bottom: 20px;

  ::after {
    content: 'finalizar compra';
  }
`;