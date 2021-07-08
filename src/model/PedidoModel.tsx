import EnderecoModel from "./EnderecoModel";
import ItemCartModel from "./ItemCartModel";

export default class PedidoModel {
  'pedidoId': number;
  'dataCriacao': Date;
  'dataAtualizacao': Date;
  'endereco': EnderecoModel;
  'itens': ItemCartModel[]

  constructor() {

    this.itens = [];
  }
}