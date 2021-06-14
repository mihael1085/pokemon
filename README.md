# Приложение "pokemon-redux" создано утилитой create-react-app и основывается на библиотеке React и менеджере состояний Redux.

Данные запрашиваются с сервера pokeapi.com
 
 * Используемые модули:
 	* UI bootstrap v 5
 	* CSS препроцессор SCSS v 4.14
 	* библиотека React JS
 	* менеджер состояния приложения Redux JS
	* middleware Redux Thunk
> Redux Thunk это middleware библиотека, которая позволяет вам вызвать action creator, возвращая при этом функцию вместо объекта. Функция принимает метод dispatch как аргумент, чтобы после того, как асинхронная операция завершится, использовать его для диспатчинга обычного синхронного экшена, внутри тела функции.

- библиотека lodash 
> используется метод _.isEmpty из этой библиотеки
- react-router-dom - используется для роутинга между компонентами
- react-paginator для пагинации списка покемонов

Следить за State можно благодаря модулю redux-devtool-extension и расширения для Chrome - Redux DevTools.
Соответсвующая вкладка появляется в Chrome в Dev Tools после утсановки расширения Redux DevTools.


## Как запустить приложение ?

Скопируйте (склонируйте) проект на локальный диск
### `git clone .......`

Для установки необходимых пакетов запустите команду :
### `yarn install`

Для запуска приложения в тестовом режиме запустите команду:
### `yarn run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



# Описание структуры приложения

В базовую сруктуру приложения входят :

### React-компоненты (каталог ./src/components)

/PokemonList.js - запускает функцию GetPokemonList, которая запрашивет с сервера [pokeapi](https://pokeapi.co) список покемонов и отображает этот список.

/Pokemon.js - запускает функции, которы запрашивют с сервера [pokeapi](https://pokeapi.co) описание покемона и отображает имя и характеристики покемона.


### STATE - состояние (файл ./src/Store.js)
В приложении есть два состояния (State):
* PokemonList - объект, в котором хранится 
	* loading : идет ли сейчас загрузка данных с сервера (в момент загрузки отображается компонент-заглушка Loader/)
	* data : список покемонов в формате {name: 'name', url: 'url'}
	* errorMsg: хранит текст ошибки (при ошибках в загрузке данных)
 	* count: хранит общее количество строк с покемонами (1118)

* Pokemon - объект, в котором хранится
	* loading : идет ли сейчас загрузка данных с сервера (в момент загрузки отображается компонент-заглушка Loader/)
	* data : список данных о покемоне в формате {name: 'namr', url: 'url'}
	* errorMsg: хранит текст ошибки (при ошибках в загрузке данных)
 	* count: хранит общее количество строк с покемонами (1118)



### ACTIONS - список действий
Так как приложение небольшое, список действий не хранится в отдельном файле, а все actions описаны в reducers

### REDUCERS - редьюсеры (редукторы) (папка ./src/reducers)

 PokemonListReducer
содержит кейсы types:	POKEMON_LIST_LOADING, POKEMON_LIST_FAIL, POKEMON_LIST_SUCCESS

PokemonReducer
содержит кейсы types: POKEMON_MULT_LOADING, POKEMON_MULT_FAIL, POKEMON_MULT_SUCCESS

### ACTION CREATORS - генераторы действий (функции, вызывающие изменения состояний) (папка ./src/actons/pokemonActions)

GetPokemonList - вызывает диспатчи (dispatch) для загрузки Списка покемонов

GetPokemon - вызывает диспатчи (dispatch) для загрузки информации о покемоне



