import { Offer, OfferImg, Desc, OfferDesc } from './styles';
import { currencyFormat } from '../../../config/Utils';
import OfertaModel from '../../../model/OfertaModel';

export default function Item(props: any) {

  const oferta: OfertaModel = props.oferta;

  const imgs = [
    '../../assets/imgs/camisa_nike_dry_miler_001.jpg',
    '../../assets/imgs/camisa_nike_dry_miler_002.jpg',
    '../../assets/imgs/camisa_nike_dry_miler_003.jpg'
  ];

  return (
    <Offer to={`/store/offer/${oferta.ofertaId}`}>
      <OfferImg src={imgs[0]}></OfferImg>
      <OfferDesc>
        <Desc>
          <p>{oferta.titulo}</p>
        </Desc>
        <div className="currency">{currencyFormat(oferta.valor)}</div>
      </OfferDesc>
    </Offer>
  );
}