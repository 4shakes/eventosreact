import React, { Component } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

import CategoriasProvider from './contex/CategoriasContex'

class App extends Component {
  render() {
    return (
      <CategoriasProvider>
        <Header titulo="Eventos en React con Eventbrite API"></Header>
        <div className="uk-container">
          <Formulario />
        </div>
      </CategoriasProvider>
    );
  }
}

export default App;