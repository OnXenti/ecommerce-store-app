import { useState } from "react";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../../components/header";
import { goToPage } from "../../config/Utils";
import StoreContext from "../../context/StoreContext";
import PedidoModel from "../../model/PedidoModel";
import Item from "./Item";
import { Container, Content, FinalizarButton, Itens } from "./styles";

export default function Cart() {
  let pedidoModel: PedidoModel = new PedidoModel();

  const history = useHistory();
  const context = useContext(StoreContext);
  const [pedido, setPedido] = useState(pedidoModel);

  useEffect(() => {
    console.log("cart context: ", context);
    setPedido(context.store.pedido);

    if (context.store.pedido.itens.length === 0) {
      goToPage(history, '/store');
    }

  }, [context, history]);

  return (
    <Container>
      <Header />
      <Content>
        <div className="produtos">
          <Itens>
            {pedido.itens.map((item, index) => (
              <Item itemCart={item} key={index} />
            ))}
          </Itens>
        </div>

        <div className="taxaEntrega">
          <p>taxa de entrega</p>
        </div>

        <div className="descontos">
          <p>descontos</p>
        </div>

        <FinalizarButton></FinalizarButton>
      </Content>
    </Container>
  );
}