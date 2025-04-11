import { useState, useEffect } from 'react';
import axios from 'axios';
// componente card
import Card from './main-components/Card';


// Main 

// indirizzo API delle attrici 
const actressesEndpoint = 'https://www.freetestapi.com/api/v1/actresses';

const actorsEndpoint = 'https://www.freetestapi.com/api/v1/actors';

export default function Main() {

    const [actresses, setActresses] = useState([]);
    const [actors, setActors] = useState([]);

    function fetchActresses() {

        // chiamata API per ricevere dati sulle attrici
        axios.get(actressesEndpoint)
            .then(res => setActresses(res.data));
    }

    useEffect(fetchActresses, []);

    function fetchActors() {

        // chiamata API per ricevere dati sugli attori 
        axios.get(actorsEndpoint)
            .then(res => setActors(res.data));
    }

    useEffect(fetchActors, []);

    return (
        <main>
            <div className="container">
                <h2>Actresses</h2>
                <div className='cards-raw'>
                    {actresses.map(actress =>
                        <Card key={actress.id} name={actress.name} onChange={event => setActresses(event.target.value)}>
                            <figure className='card-img'>
                                <img src={actress.image} alt={actress.name} />
                            </figure>
                            <li> <span>Birth Year:</span> {actress.birth_year}</li>
                            <li> <span>Nationality:</span>  {actress.nationality}</li>
                            <li> <span>Biography:</span> {actress.biography}</li>
                            <li> <span>Awards:</span> {actress.awards}</li>
                        </Card>
                    )}
                </div>

                <h2>Actors</h2>
                <div className='cards-raw'>
                    {actors.map(actor =>
                        <Card key={actor.id} name={actor.name} onChange={event => setActors(event.target.value)}>
                            <figure className='card-img'>
                                <img src={actor.image} alt={actor.name} />
                            </figure>
                            <li> <span>Birth Year:</span> {actor.birth_year}</li>
                            <li> <span>Nationality:</span>  {actor.nationality}</li>
                            <li> <span>Biography:</span> {actor.biography}</li>
                            <li> <span>Awards:</span> {actor.awards}</li>
                        </Card>
                    )}
                </div>
            </div>
        </main>
    )
}