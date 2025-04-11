import { useState, useEffect } from 'react';
import axios from 'axios';
// componente card
import Card from './main-components/Card';


// Main 

// indirizzo API delle attrici 
const actressesEndpoint = 'https://www.freetestapi.com/api/v1/actresses';

const actorsEndpoint = 'https://www.freetestapi.com/api/v1/actors';

export default function Main() {

    const [singleList, setSingleList] = useState([]);

    function fetchSingleList() {

        // chiamata API per ricevere dati sulle attrici
        axios.get(actressesEndpoint)
            .then(actressesResponse => {

                // chiamata API per ricevere dati sugli attori
                axios.get(actorsEndpoint)
                    .then(actorsResponse => {

                        const actressesList = actressesResponse.data;
                        const actorsList = actorsResponse.data;

                        setSingleList([...actressesList, ...actorsList]);
                    })
            })
    }

    useEffect(fetchSingleList, []);

    return (
        <main>
            <div className="container">
                <h2>Actresses and Actors</h2>
                <div className='cards-raw'>
                    {singleList.map(actors =>
                        <Card key={actors.name} name={actors.name} onChange={event => setSingleList(event.target.value)}>
                            <figure className='card-img'>
                                <img src={actors.image} alt={actors.name} />
                            </figure>
                            <li> <span>Birth Year:</span> {actors.birth_year}</li>
                            <li> <span>Nationality:</span>  {actors.nationality}</li>
                            <li> <span>Biography:</span> {actors.biography}</li>
                            <li> <span>Awards:</span> {actors.awards}</li>
                        </Card>
                    )}
                </div>
            </div>
        </main>
    )
}