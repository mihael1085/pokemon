import React, { Fragment, useEffect, useState } from 'react'
import { Cards } from '../components/Cards'
import { Loader } from '../components/Loader'
import axios from 'axios'
import {Link} from 'react-router-dom'

import _ from 'lodash'
import {GetPokemonList} from '../actions/pokemonActions'

import {useDispatch, useSelector} from 'react-redux'


export const Home = () => {
	return (
		<Fragment>
			<h1>Pokemon List</h1>
			<Cards />
		</Fragment>
	)
}
