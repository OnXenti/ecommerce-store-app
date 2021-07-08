import styled from "styled-components";
import { currencyFormat } from "../../../config/Utils";
import ItemCartModel from "../../../model/ItemCartModel";

const Container = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 2vh;

  .quantidade {
    margin-right: 8px;
  }

  .valor {
    font-size: 1.1rem;
    font-family: 'Roboto Bold';
  }
`;

const Imagem = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
`;

export default function Item(props: any) {

  const itemCart = props.itemCart as ItemCartModel;

  return (
    <Container>
      <Imagem></Imagem>
      <div>
        <p>{`${itemCart.quantidade}x `} {itemCart.item.descricao}</p>
        <p className="valor">{currencyFormat(itemCart.item.valor * itemCart.quantidade)}</p>
      </div>
    </Container>
  );
}