import React, { Component } from 'react';
import Header from './components/Header'

import CategoriasProvider from './contex/CategoriasContex'

class App extends Component {
  render() {
    return (
      <CategoriasProvider>
        <Header titulo="Eventos en React con Eventbrite API"></Header>
      </CategoriasProvider>
    );
  }
}

export default App;