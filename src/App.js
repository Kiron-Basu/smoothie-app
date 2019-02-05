import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import SmoothieBuilder from './containers/SmoothieBuilder/SmoothieBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>test</p>
          <SmoothieBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
