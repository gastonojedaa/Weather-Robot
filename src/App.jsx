import './App.css'
import { Weather } from './components/Weather'
import { useWeather } from './hooks/useWeather'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'
//const URL =	'https://api.openweathermap.org/data/2.5/weather?q=Cordoba&appid=f3bba81eb4a58b948a5169e032aa981e'

function App() {
	const { search, updateSearch, error } = useSearch()
	const { getWeather, isLoading, weather } = useWeather({ search })

	const hasInfo = weather.name != undefined

	const debouncerWeather = debounce(search => {
		getWeather(search)
	}, 500)

	const handleSubmit = e => {
		e.preventDefault()
		getWeather({ search })
	}

	const handleChange = event => {
		const newSearch = event.target.value
		if (newSearch.startsWith(' ')) return
		updateSearch(newSearch)
		debouncerWeather({ search: newSearch })
	}

	return (
		<div className='page'>
			<header>
				<h1 className='title'>Weather App</h1>
				<form className='form' onSubmit={handleSubmit}>
					<input onChange={handleChange} type='text' />
					<button>Search</button>
				</form>
			</header>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<main>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<Weather weather={weather} hasInfo={hasInfo} />
				)}
				{hasInfo ? (
					<img
						className='robot'
						src={`https://robohash.org/${search}`}
						alt=''
					/>
				) : (
					<img
						className='cat'
						src={'https://cdn.7tv.app/emote/629bba22a3ae735ee06a1caa/4x.webp'}
						alt=''
					/>
				)}
			</main>
		</div>
	)
}

export default App
