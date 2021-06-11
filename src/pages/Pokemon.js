import React, { Fragment, useEffect , useState} from 'react'
import { OnePokemon } from '../components/OnePokemon'
import { useParams } from 'react-router-dom'
import { Loader } from '../components/Loader'
import axios from 'axios'



export const Pokemon = (  ) => {

	const { id } = useParams()

	const [load, setLoad] = useState(true)
	const [onePokemon, setOnePokemon] = useState({})

	
	useEffect(async () => {

		let url = 'https://pokeapi.co/api/v2/pokemon/'

		const { data } = await axios.get(url + (+id+1))

		console.log('data from axios', data)

		setOnePokemon(data)
		setLoad(false)

	}, [])


	return (
		<Fragment>
				{ load ? 
					<Loader />
				: 
					<OnePokemon pokemonData={onePokemon}/>
				}
		</Fragment>

	)
}