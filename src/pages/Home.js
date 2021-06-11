import React, { Fragment, useEffect, useState } from 'react'
import { Cards } from '../components/Cards'
import { Loader } from '../components/Loader'
import axios from 'axios'


export const Home = () => {

		const [pokemons, setPokemons] = useState([])
		const [load, setLoad] = useState(true)



		useEffect(async () => {
			const { data } =  await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
			const pokemons = data.results;
			console.log('data : ', data.results)


			setPokemons(pokemons)
			setLoad(false)

			//искусственная задержка (для проверки LOADER-а), можно убрать
			// delay before pokemons load
			// await setTimeout(() => {
			// 		setLoad(false)
			// 	}, 1000)

			}, []);


	return (
		<Fragment>
				{ load ? 
					<Loader />
				:
					<Cards pokemons={pokemons}/>
				}
		</Fragment>
	)
}
