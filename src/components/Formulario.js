import React, { Component } from 'react';

class Formulario extends Component {

      state = {
            nombre: '',
            categoria: ''
      }

      render() {
            return (
                  <form>
                        <fieldset className="uk-fieldset uk-margin">
                              <legend className="uk-legend uk-text-center">Busca tu evento por nombre o categoria</legend>
                        </fieldset>
                        <div className="uk-column-1-3@m uk-margin">
                              <div className="uk-margin" uk-margin="true">
                                    <input className="uk-input" type="text" placeholder="escribe tu evento" />
                              </div>
                              <div className="uk-margin" uk-margin="true">
                                    <select name="categoria" id="" className="uk-select">
                                          <option value=""></option>
                                    </select>
                              </div>
                              <div className="">
                                    <button type="button" className="uk-button uk-button-danger">Buscar Evento</button>
                              </div>
                        </div>
                  </form>
            );
      }
}

export default Formulario;