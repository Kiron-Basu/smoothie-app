import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import SmoothieBuilder from './containers/SmoothieBuilder/SmoothieBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/* <SmoothieBuilder/>
          <Checkout /> */}
          <HashRouter>
            <Switch>
              <Route path="/" exact component={SmoothieBuilder} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </HashRouter>
        </Layout>
      </div>
    );
  }
}

export default App;
