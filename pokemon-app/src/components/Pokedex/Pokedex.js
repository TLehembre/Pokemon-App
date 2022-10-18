import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
    .get('https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon')
    .then(res => {
      console.log(res)
      setPokemons(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <div>Pokedex</div>
      <div>
        <ul>
          {
            pokemons.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)
          }
        </ul>
      </div>
    </>
  )
}

export default Pokedex