import { useEffect, useState } from "react"


export function useSearch() {
    const [error, setError] = useState(null)
	const [search, updateSearch] = useState('')

    useEffect(() => {
        if (search === '') {
            setError('The city name can not be empty')
            return
        }
        if (search.length < 3) {
            setError("The city name length must be at least 3 characters")
            return
        }
        setError(null)
    }, [search])    

    return {error, search, updateSearch}

}
