export function InfoWeather({ weather }) {
	return (
		<ul key={weather.id}>
			<h1 className='city'>{weather.name}</h1>

			<div className='data'>
				<h1 className='temp'>{parseInt(weather.main.temp - 273.15)}°</h1>
				<img
					src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
					alt={weather.name}
				/>
			</div>
		</ul>
	)
}

export function NoInfo() {
	return <p>Weather Info was not found</p>
}

export function Weather({ weather, hasInfo }) {
	return hasInfo ? <InfoWeather weather={weather} /> : <NoInfo />
}
