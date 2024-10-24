/* eslint-disable react/prop-types */

import { useState } from 'react'
import './Country.css'

export default function Country({ country, handleVisitedCountry }) {
    const { flags, name, cca3 } = country

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <p style={{ color: visited ? 'blue' : 'black' }}>Country: {name.common}</p>
            <img src={flags.png} alt="" />
            <p><small>Code:{cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited ? "Visited" : "Visit"}</button> <br />
            {visited ? "I have visited" : "I want to go"}
        </div>
    )
}
