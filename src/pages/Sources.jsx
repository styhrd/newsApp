import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSources } from '../store/sourcesSlice'
const Sources = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('')
    const [language, setLanguage] = useState('')
    const [country, setCountry] = useState('')
    const { sources } = useSelector((state) => state.sources)

    useEffect(() => {
        dispatch(fetchSources(category, language, country))


    }, [category, language, country])

    console.log(sources);
    return (
        <div>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value={'business'}>Business</option>
                <option value={'entertainment'}>Entertainment</option>
                <option value={'general'}>General</option>
                <option value={'health'}>Health</option>
                <option value={'science'}>Science</option>
                <option value={'sports'}>Sports</option>
                <option value={'technology'}>Technology</option>

            </select>
        </div>
    )
}

export default Sources
