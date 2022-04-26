import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import './styles/header.css'
import './fonts/BYekan-webfont.woff'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './lang/Wrapper'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import ProductsDetails from './containers/mainBody/productDetails/ProductDetails';



ReactDOM.render(
  <Wrapper >
    <Provider store={store}>

      <Router>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/shoppingCart" exact component={ShoppingCart} />
          <Route path="/product/:productId" exact component={ProductsDetails}/>

        </Switch>

      </Router>
    </Provider>


  </Wrapper>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
