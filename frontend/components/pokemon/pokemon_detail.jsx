import React from 'react';
import { Route } from 'react-router-dom';


class PokemonDetail extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps) {
        if( prevProps.match.params.pokemonId !== 
            this.props.match.params.pokemonId
            ) {
                this.props.requestSinglePokemon(this.props.match.params.pokemonId);
            }
    }


    render () {
        const { pokemon, items } = this.props;

        if (!pokemon) return null;

        

        return (
            <div className='PokemonDetail'>
                <figure>
                    <img src={pokemon.image_url} alt={pokemon.name}/>
                </figure>
                <ul>
                    <li>
                        <h3> {pokemon.name} </h3>
                    </li>
                    <li> Type: {pokemon.poke_type} </li>
                    <li> Attack: {pokemon.attack}</li>
                    <li> Defense: {pokemon.defense}</li>
                    <li> Moves: {pokemon.moves.join(',')}</li>

                </ul>

            </div>
        )
    }
}

export default PokemonDetail;