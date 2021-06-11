import React from 'react'

export const OnePokemon = ({pokemonData}) => {

	console.log('onePokemon', pokemonData)
	return (
	<div>
		<h1>Pokemon {pokemonData.name}</h1>
		<div>
			<img src={pokemonData.sprites.front_default} alt="logo"/> 
			<img src={pokemonData.sprites.back_default} alt="logo"/> 
		</div>
		<div>
			<span><p>EXP</p>{pokemonData.base_experience}</span>
		</div>
	</div>
	)
}
