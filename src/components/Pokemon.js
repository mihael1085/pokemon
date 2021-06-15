import React from 'react'
import {Loader} from './Loader'
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../actions/pokemonActions';

export const Pokemon = (props) => {
	const pokemonName = props.match.params.pokemon
	const dispatch = useDispatch();
	const pokemonState = useSelector(state => state.Pokemon)

	console.log('pokemon : ', pokemonName)

	React.useEffect(() => {
		dispatch(GetPokemon(pokemonName))
	}, [])

	const showData = () => {
		if((pokemonState.data[pokemonName])){
			const pokeData = pokemonState.data[pokemonName]
			return (
				<div className="pokemon-wrapper">
					<div className="pokemon">
						<h1>Sprites</h1>
						<img src={pokeData.sprites.front_default}></img>
						<img src={pokeData.sprites.back_default}></img>
						<img src={pokeData.sprites.front_shiny}></img>
						<img src={pokeData.sprites.back_shiny}></img>
					</div>
					<div className="stats">
						<h1>Stats</h1>
						{pokeData.stats.map(el => {
							return (
								<p>{el.stat.name} {el.base_stat}</p>
							)
						})}
					</div>
					<div className="abilities">
						<h1>Abilities</h1>
						{pokeData.abilities.map(el => {
							return (
								<p>{el.ability.name}</p>
							)
						})}
					</div>
				</div>
			)
		}

		if(pokemonState.loading)
			return <Loader />

		if(pokemonState.errorMsg !== '')
			return <p>error {pokemonState.errorMsg}</p>

		return <p>error loading data</p>
	}

	return (
		<div className="poke">
			<h1>{pokemonName}</h1>
			<div>{showData()}</div>
		</div>
	)
}
