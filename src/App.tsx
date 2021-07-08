import Routes from "./routes";
import StoreContext from './context/StoreContext';
import StoreModel from "./model/StoreModel";

export default function App() {

  const store: StoreModel = new StoreModel();

  return (
    <StoreContext.Provider value={{ store }}>
      <Routes />
    </StoreContext.Provider>
  );
}