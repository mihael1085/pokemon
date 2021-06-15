import React from 'react'
import { Link } from 'react-router-dom'
import {Loader} from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import {GetPokemonList} from '../actions/pokemonActions'
import ReactPaginate from 'react-paginate';

export const PokemonList = ({pokemons}) => {

	const dispatch = useDispatch();
	const pokemonList = useSelector(state => state.PokemonList)
	React.useEffect(() => {
		FetchData(1)
	}, [])

	const FetchData = (page = 1) => {
		dispatch(GetPokemonList(page))
	}

	const ShowData = () => {
		if(pokemonList.data) {
			return(
				<div className="list-wrapper">
				{ pokemonList.data.map((el, index) => {
				return( 
					<Link to={`/pokemon/${el.name}`}>
						<div className="pokemon-item">
							<p>{el.name}</p>
						</div>
					</Link>
				)
			})}
				</div>
			)
		}

		if(pokemonList.loading) {
			return <Loader />
		}

		if(pokemonList.errorMsg) {
			return <p>{pokemonList.errorMsg}</p>
		}

		return <p>enable to get data</p>

		} 

	return (
		<div>
			{ShowData()}
			{(pokemonList.data) && (
				<ReactPaginate
					pageCount={Math.ceil(pokemonList.count / 15)}
					pageRangeDisplayed={2}
					marginPagesDisplayed={1}
					onPageChange={(data) => FetchData(data.selected + 1)}
					containerClassName="pagination" 
				/>
			)}
		</div>
	)
}