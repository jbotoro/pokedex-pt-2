import React from "react";
import ReactDOM from "react-dom";
import { receiveAllPokemon} from "./actions/pokemon_actions";
import { fetchAllPokemon } from "./util/api_util";
import {configureStore} from "./store/store";
import {requestAllPokemon} from "./actions/pokemon_actions";
import {Root} from "./components/root";
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;

  ReactDOM.render(<Root store={store}/>, rootEl)
})