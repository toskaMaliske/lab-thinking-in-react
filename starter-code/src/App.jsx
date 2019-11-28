import React, { Component } from 'react';
import data from './data.json'
import "./App.css" 
import ProductTable from './components/ProductTable.jsx';


class App extends Component {

  state = {
    products: data.data
  }

  render() {
    console.log(this.state.products);

    return (
      <div className="App">
      <h1>IronStore</h1>
        <ProductTable  products={this.state.products}/>
        
      </div>
    );
  }
}

export default App;
