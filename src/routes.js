import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import GlobalFonts from './global/GlobalFonts';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Showcase from './pages/Showcase';

export default function Routes() {
  return (
    <Router>
      <GlobalFonts />
      <Switch>
        <Route path='/store' exact component={Showcase} />
        <Route path='/store/offer/:ofertaId' component={Details} />
        <Route path='/store/cart' component={Cart} />
        <Redirect to='/store' />
      </Switch>
    </Router>
  );
}