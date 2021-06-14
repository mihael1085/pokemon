const DefaultState = {
	loading: false,
	data: [],
	errorMsg: '',
	pokemonName: ''
}

const PokemonReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case "POKEMON_MULT_LOADING": 
			return {
				...state,
				loading: true,
				errorMsg: ''
			};

			case "POKEMON_MULT_FAIL": 
				return {
					...state,
					loading: false,
					errorMsg: 'unable to find pokemon'
				};

			case "POKEMON_MULT_SUCCESS": 
				return {
					...state,
					loading: false,
					data: {
						...state.data,
						[action.pokemonName]: action.payload
					},
					errorMsg: '' 
				};
			
		default: 
			return state
}
}

export default PokemonReducer