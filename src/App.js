import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';

import {
  Home,
  SingleProductPage,
  Cart,
  Checkout,
  Error,
  About,
  Products,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/api/products'>
          <Products />
        </Route>
        <Route
          exact
          path='/api/products/:id'
          children={<SingleProductPage />}
        />
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
