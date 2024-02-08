import { useCallback, useRef, useState } from "react"
import { fetchWeather } from "../services/weather"

export function useWeather() {
    const [weather, setWeather] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const previousSearch = useRef(true)

    const getWeather = useCallback(async ({ search }) => {
        if(previousSearch.current == search) return
        try {
            setIsLoading(true)
            previousSearch.current = search
            const newWeather = await fetchWeather({ search })
            setWeather(newWeather)
        }
        catch (e) {
            setIsLoading(true)
            throw new Error(e.message)
        }
        finally {
            setIsLoading(false)
        }
    }, [])

    return { weather, getWeather, isLoading }
}