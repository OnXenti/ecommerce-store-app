import { Fragment, useContext, useEffect, useState } from 'react';
import Item from './Item';
import StoreContext from '../../context/StoreContext';
import { Container, Banner, CartDetails, Offers } from './styles';
import { loadOffers } from '../../services/StoreService';
import OfertaModel from '../../model/OfertaModel';
import PedidoModel from '../../model/PedidoModel';
import MenuCategories from './MenuCategories';
import Header from '../../components/header';
import CategoriaModel from '../../model/CategoriaModel';
import Footer from '../../components/footer';

export default function Showcase() {

  const offerList: OfertaModel[] = [];
  const pedidoModel: PedidoModel = new PedidoModel();
  const categoriaList: CategoriaModel[] = [];

  const [ofertas, setOfertas] = useState(offerList);
  const [pedido, setPedido] = useState(pedidoModel);
  const [categorias, setCategorias] = useState(categoriaList);

  const storeContext = useContext(StoreContext);

  useEffect(() => {
    loadOffers().then((response: any) => {

      console.log("context showcase: ", storeContext);
      console.log("store-payload: ", response);

      // carregar context api com response do service.
      storeContext.store.ofertas = response.ofertas;

      setOfertas(response.ofertas);

      //Temporario
      // carrega o pedido do context, mas vai sempre carregar do serviço
      if (storeContext.store.pedido.itens.length === 0) {
        setPedido(response.pedido);
      } else {
        setPedido(storeContext.store.pedido);
      }
    });
  }, [storeContext]);


  useEffect(() => {
    const categoriaListLocal: CategoriaModel[] = [];

    ofertas.flatMap(o => o.categorias.map(cat => cat)).forEach(categoria => {
      if (!categoriaListLocal.some(c => c.categoriaId === categoria.categoriaId)) {
        categoriaListLocal.push(categoria);
      }
    });

    categoriaListLocal.sort((a,b) => (a.posicao > b.posicao) ? 1 : (b.posicao > a.posicao) ? -1 : 0);
    setCategorias(categoriaListLocal);
  }, [ofertas]);

  return (
    <Container>
      <Header />
      <Banner>store</Banner>
      {categorias.map((categoria, index) => (
        <Fragment key={index}>
          <MenuCategories category={categoria.titulo} />
          <Offers>
            {ofertas.map((oferta, index) => (oferta.categorias
              .some(c => c.categoriaId === categoria.categoriaId)
              && <Item key={index} oferta={oferta} />))}
          </Offers>
        </Fragment>
      ))}
      <Footer />
      {pedido.itens.length > 0 && <CartDetails to='/store/cart'></CartDetails>}
    </Container>
  );
}