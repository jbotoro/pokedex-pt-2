import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container'


class PokemonIndex extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render () {
        const { pokemon } = this.props

        return (
            <div className='PokeIndex'>
                <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
                <ul>
                    {pokemon.map ( pokemon => 
                        <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>)}
                </ul>

            </div>
        )
    }
}

export default PokemonIndex;