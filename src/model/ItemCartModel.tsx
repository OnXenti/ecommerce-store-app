import OfertaModel from "./OfertaModel";

export default class ItemCartModel {
  "quantidade": number;
  "item": OfertaModel;

  constructor(quantidade: number, item: OfertaModel) {
    this.quantidade = quantidade;
    this.item = item;
  }
}