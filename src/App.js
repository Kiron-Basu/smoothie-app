import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import SmoothieBuilder from './containers/SmoothieBuilder/SmoothieBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/* <SmoothieBuilder />
          <Checkout /> */}
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/" exact component={SmoothieBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
