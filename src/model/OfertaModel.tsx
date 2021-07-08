import CategoriaModel from "./CategoriaModel";

export default class OfertaModel {
  'ofertaId': number;
  'titulo': string;
  'especificacao': string;
  'descricao': string;
  'valor': number;
  'categorias': CategoriaModel[];

  // constructor() {}
};