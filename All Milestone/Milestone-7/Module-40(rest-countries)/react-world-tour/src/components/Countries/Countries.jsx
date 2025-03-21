import { useEffect } from "react";
import { useState } from 'react'
import Country from "../Country/Country";

import './Countries.css';


const Countries = () => {

    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {

        const countryList = [...visitedCountries, country]
        setVisitedCountries(countryList);
    }
    console.log(visitedCountries);

    return (
        <div >
            <h3>Countries present: {countries.length}</h3>

            <div>
                <h4>Visited Countries:{visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>

            <div className="country-container">

                {
                    countries.map(country => <Country handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;