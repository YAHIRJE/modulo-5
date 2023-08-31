import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MiniNookShop</h1>
        <img src="https://cm1.aminoapps.com/7365/373cec1efe63d57c95770ac685ae49cdedbd1de4_00.jpg" width="60" alt="MiniNookShop logo" />
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
