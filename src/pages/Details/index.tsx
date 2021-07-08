import { useContext, useEffect, useState } from 'react';
import {
  Container, Info,
  OfferImg, Control, ButtonBackImg, ButtonNextImg,
  AddCartButton, ControlPrice
} from './styles';
import { currencyFormat, goToPage } from '../../config/Utils';
import StoreContext from '../../context/StoreContext';
import { useHistory } from 'react-router';
import OfertaModel from '../../model/OfertaModel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ItemCartModel from '../../model/ItemCartModel';
import Header from '../../components/header';

export default function Details(props: any) {

  const ofertaModel: OfertaModel = new OfertaModel();

  /** Hooks */
  let history = useHistory();
  const [indexImg, setIndexImg] = useState(0);
  const [oferta, setOferta] = useState(ofertaModel);
  const [qtd, setQtd] = useState(1);

  /** load context api */
  const context = useContext(StoreContext);

  console.log("context: ", context);
  console.log("props: ", props);

  const ofertaList: OfertaModel[] = context.store.ofertas;
  const ofertaId: string = props.match.params.ofertaId;

  useEffect(() => {
    if (ofertaList.length > 0) {
      const oferta: OfertaModel | undefined = ofertaList
        .filter((oferta: OfertaModel) => oferta.ofertaId === parseInt(ofertaId))
        .pop();
      if (oferta) {
        setOferta(oferta);
      }
    } else {
      goToPage(history, '/store');
    }
  }, [oferta, ofertaList, history, ofertaId]);

  const imgs = [
    '../../assets/imgs/camisa_nike_dry_miler_001.jpg',
    '../../assets/imgs/camisa_nike_dry_miler_002.jpg',
    '../../assets/imgs/camisa_nike_dry_miler_003.jpg'
  ];

  function subtrairQtd() {
    setQtd(qtd > 1 ? qtd - 1 : 1);
  }

  function somarQtd() {
    setQtd(qtd + 1);
  }

  function addToCart() {
    context.store.pedido.itens.push(new ItemCartModel(qtd, oferta));
    goToPage(history, '/store');
  }

  function hasBackImg() {
    if (indexImg > 0) {
      setIndexImg(indexImg - 1);
    }
  }

  function hasNextImg() {
    if (indexImg < (imgs.length - 1)) {
      setIndexImg(indexImg + 1);
    }
  }

  return (
    <Container>
      <Header />

      <div>
        <ButtonBackImg>
          {indexImg !== 0 && <ChevronLeftIcon onClick={() => hasBackImg()} className="icon" />}
        </ButtonBackImg>
        <OfferImg src={imgs[indexImg]}></OfferImg>
        <ButtonNextImg>
          {imgs.length - 1 !== indexImg && <ChevronRightIcon onClick={() => hasNextImg()} className="icon" />}
        </ButtonNextImg>
      </div>

      <Info>
        <p className="title">{oferta.titulo}</p>
        <p className="descricao">{oferta.descricao}</p>
        <ControlPrice>
          <p className="controlPrice">
            <span className="buttonChangeQtd right" onClick={() => subtrairQtd()}>-</span>
            {qtd}
            <span className="buttonChangeQtd left" onClick={() => somarQtd()}>+</span>
          </p>
          <p className="price">{currencyFormat(oferta.valor * qtd)}</p>
        </ControlPrice>
        <p className="info-label">Sobre o produto</p>
        <p className="especificacao">{oferta.especificacao}</p>
      </Info>

      <Control>
        <AddCartButton onClick={addToCart}></AddCartButton>
      </Control>
    </Container>
  );
}
