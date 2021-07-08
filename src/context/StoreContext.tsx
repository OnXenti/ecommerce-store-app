import { createContext } from 'react';
import StoreModel from '../model/StoreModel';

const store: StoreModel = new StoreModel();

export default createContext({ store });