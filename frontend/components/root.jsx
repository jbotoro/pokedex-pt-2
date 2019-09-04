import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route} from 'react-router-dom';

export const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>        
            <Route path='/' component={PokemonIndexContainer} />
        </HashRouter>
       
    </Provider>
);

