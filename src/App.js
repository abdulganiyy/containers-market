import "./App.css";
// import Product from "./components/Product/Product";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home/Home";
import SignUp from "./components/Forms/SignUp/SignUp";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Redirect from="/" to="/product" /> */}
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
