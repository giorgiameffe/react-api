import { useState, useEffect } from 'react';
import axios from 'axios';

import ActressCard from './main-components/ActressCard';


// Main 

// indirizzo API delle attrici 
const endpoint = 'https://www.freetestapi.com/api/v1/actresses';

export default function Main() {

    const [actresses, setActresses] = useState([]);

    function fetchActresses() {

        // fare chiamata axios
        axios.get(endpoint)
            .then(res => setActresses(res.data));
    }

    useEffect(fetchActresses, []);

    return (
        <main>
            <div className="container">
                <div className='cards-raw'>
                    {actresses.map(actress =>
                        <ActressCard key={actress.id} name={actress.name} onChange={event => setActresses(event.target.value)}>
                            <figure className='card-img'>
                                <img src={actress.image} alt={actress.name} />
                            </figure>
                            <li> <span>Birth Year:</span> {actress.birth_year}</li>
                            <li> <span>Nationality:</span>  {actress.nationality}</li>
                            <li> <span>Biography:</span> {actress.biography}</li>
                            <li> <span>Awards:</span> {actress.awards}</li>
                        </ActressCard>
                    )}
                </div>
            </div>
        </main>
    )
}