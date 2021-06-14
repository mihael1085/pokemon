import React, { Fragment } from 'react'

export const About = () => {
	return (
		<Fragment>
			<h1>About page</h1>
			<p>Приложение "pokemon-redux" создано утилитой create-react-app и основывается на библиотеке React и менеджере состояний Redux.</p>
			<p>Данные запрашиваются с сервера pokeapi.com</p>
 <ul> Используемые модули:
	 <li>UI bootstrap v 5</li>
	 <li>CSS препроцессор SCSS v 4.14</li>
	 <li>библиотека React JS </li>
	 <li>менеджер состояния приложения Redux JS</li>
	 <li> middleware Redux Thunk</li>
	 <li>библиотека lodash </li>
	 <li>react-router-dom - используется для роутинга между компонентами</li>
	 <li>react-paginator для пагинации списка покемонов</li>
 </ul>

	<strong>Следить за State можно благодаря модулю redux-devtool-extension и расширения для Chrome - Redux DevTools.
	Соответсвующая вкладка появляется в Chrome в Dev Tools после утсановки расширения Redux DevTools.</strong>

		</Fragment>
	)
}