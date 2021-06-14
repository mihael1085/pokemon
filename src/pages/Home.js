import React, { Fragment } from 'react'
import { PokemonList } from '../components/PokemonList'



export const Home = () => {
	return (
		<Fragment>
			<h1>Pokemon List</h1>
			<PokemonList />
		</Fragment>
	)
}
