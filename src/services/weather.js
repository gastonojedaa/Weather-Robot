const API_KEY = 'f3bba81eb4a58b948a5169e032aa981e'

export const fetchWeather = async ({ search }) => {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
    const json = await response.json()

    return json
}