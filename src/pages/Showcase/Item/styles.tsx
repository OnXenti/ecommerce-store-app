import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const offerAnimation = keyframes`
  from { margin-left: 2vh; opacity: 0 }
  to { margin-left: 0; opacity: 1 }
`;

export const Offer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 0.01rem solid #a8a8a8;
  
  animation-name: ${offerAnimation};
  animation-duration: 1s;
  color: #484848;

  box-sizing: border-box;
  text-decoration: none;
  border-radius: 10px;

  @media (max-width: 600px) {
    margin-right: 20px;
  }

  @media (min-width: 600px){
    flex-direction: column;
    align-items: center;
  
    width: 16vw;
    min-width: 190px;
    margin-right: 3vw;
    
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, 
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      border-radius: 10px;
    }
  }
`;

export const OfferImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 10px;

  @media (min-width: 800px) {
    width: 140px;
    height: 140px;
  }
`;

export const OfferDesc = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
  }

  .currency {
    font-size: 1.2rem;
    margin-top: 2vh;
    margin-bottom: 1vh;
    font-weight: bold;
  }
  
  @media (min-width: 800px) {
    flex-direction: column;
    margin: 0;
    align-items: center;
    width: 80%;
    justify-content: center;
  }
`;

export const Desc = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  color: #585858;

  .subdesc {
    font-size: 0.8rem;
    font-family: 'Roboto Light';
  }

  @media (min-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;