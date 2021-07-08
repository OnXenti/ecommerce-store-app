import PedidoModel from "./PedidoModel";
import OfertaModel from "./OfertaModel";

export default class StoreModel {
  'ofertas': OfertaModel[];
  'pedido': PedidoModel;

  constructor() {
    this.ofertas = [];
    this.pedido = new PedidoModel();
  }
}