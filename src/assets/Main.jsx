import { useState, useEffect } from 'react';
import axios from 'axios';


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
                        <section className='card' key={actress.id} onChange={event => setActresses(event.target.value)}>
                            <h3>{actress.name}</h3>
                            <figure>
                                <img src={actress.image} alt={actress.name} />
                            </figure>
                            <u>
                                <li> Birth Year: {actress.birth_year}</li>
                                <li> Nationality: {actress.nationality}</li>
                                <li> Biography: {actress.biography}</li>
                                <li> Awards: {actress.awards}</li>
                            </u>
                        </section>
                    )}
                </div>
            </div>
        </main>
    )
}