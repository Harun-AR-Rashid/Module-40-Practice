import { useState } from 'react';
import './country.css'
const Country = ({ country }) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    const { name, flags, continents, area, population, cca3 } = country
    return (
        <div className={`country ${visited ?'visited' : 'non-visited'}`}>
            <h3 style={{color: visited? 'Purple' : 'white'}}>{name.common}</h3>
            <img className='img-section' src={flags.png} alt="" />
            <p>Continents: {continents}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited? 'I have visited this country': 'I want to visit this country'}
        </div>
    );
};

export default Country;