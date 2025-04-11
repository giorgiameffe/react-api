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
            .then(res => console.log(res.data)) // => stampare in console la lista delle attrici
    }

    useEffect(fetchActresses, []);

    return (
        <main>

        </main>
    )
}