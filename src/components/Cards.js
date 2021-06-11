import React from 'react'
import { Link } from 'react-router-dom'

export const Cards = ({pokemons}) => {

	let imgUrl = 'https://pokeres.bastionbot.org/images/pokemon/'

	const onHandle = (id) => {
		console.log(id.target.dataset);
	 }

	return (
		<ul className="list-group">
			{pokemons.map((pokemon, index) => (
				<Link to={`/pokemon${index}`} key={index}>
					<li
						onClick={onHandle}
						className="list-group-item"
						data-id={index}
					>
					<div>
						<p>{pokemon.name}</p>
						<img src={imgUrl + (index+1) + '.png'} alt="logo" height="100px"/>
					</div>
				</li>
				</Link>
			)
	)}

		</ul>
	)
}