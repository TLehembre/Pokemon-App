import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokedex.css';
import { Button } from 'react-bootstrap';


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
      <h1>Pokédex</h1>
      <input placeholder='search'></input>
      <Button>My team</Button>
      <Button>Favorites</Button>
      <div>
        <ul className='list-group'>
          {
            pokemons.map(pokemon => <li className='list-group-item' key={pokemon.id}>
                <div className='pokemon-list-item'>
                  <img alt={pokemon.name} src={pokemon.sprites.front_default} className='pokemon-image flex-item'/>
                   <div className='flex-item pokemon-id-item'><p className='pokemon-name'>{pokemon.name}</p><p className='pokemon-id'>Nr. {pokemon.id}</p></div>
                   <div className='flex-item'>dfdffds</div>
                  </div>
              </li>)
          }
        </ul>
      </div>
    </>
  )
}

export default Pokedex