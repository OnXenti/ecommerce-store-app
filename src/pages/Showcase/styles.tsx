import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  font-family: 'Roboto Regular';
  width: 90%;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  box-sizing: border-box;
  border: 0.5px dashed black;
  width: 100%;
`;

const bagBoxAnimation = keyframes`
  from { width: 80%; height: 75px; opacity: 0; }
  to { width: 90%; height: 80px;  opacity: 1 }
`;

export const CartDetails = styled(Link)`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 500px;
  box-sizing: border-box;
  height: 80px;
  bottom: 2vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, 
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 10px;
  background-color: #B2C5B2;
  text-decoration: none;
  color: #000000;
  
  @media (max-width:800px) {
    animation-name: ${bagBoxAnimation};
    animation-duration: 1s;
  }

  @media (min-width:800px) {
    height: 100px;
    top: 32vh;
    left: 43vw;
  }
`;

export const Offers = styled.div`
  display: flex;
  box-sizing: border-box;
  /* margin-bottom: 1vh; */

  @media (max-width: 600px) {
    overflow: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    /* scroll-snap-points-x: repeat(300px); */
    scroll-snap-type: mandatory;
    width: 100%;
  }

  @media (min-width: 600px) {
    width: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 14vh;
  margin-bottom: 10vh;
  border: 0.5px dashed black;
`;