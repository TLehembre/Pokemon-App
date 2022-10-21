import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokedex.css';
import { Button } from 'react-bootstrap';
import { getTypeColor } from '../../services/PokemonService';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');

  
  const filter = (e) => {
    const keyword = e.target.value;
  if (keyword !== '') {
    const results = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().startsWith(keyword.toLowerCase()) || pokemon.id.toString() === keyword;
    });
    setFilteredPokemons(results);
  } else {
    setFilteredPokemons(pokemons);
  }

  setSearchTerms(keyword);
};

  useEffect(() => {
    axios
    .get('https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon')
    .then(res => {
      console.log(res)
      setPokemons(res.data);
      setFilteredPokemons(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <div className='wrapper'>
        <h1>Pokédex</h1>
        <input className='search-bar' value={searchTerms} onChange={filter} placeholder='search'></input>
        <div className='button-wrapper'>
          <Button className='my-team'>Mijn team</Button>
          <Button className='favorites'>Favorieten</Button>
        </div>
        <div>
          <ul className='list-group'>
            {
              filteredPokemons.map(pokemon => <li className='list-group-item' key={pokemon.id}>
                  <div className='pokemon-list-item'>
                    <img alt={pokemon.name} src={pokemon.sprites.front_default} className='pokemon-image flex-item'/>
                    <div className='flex-item pokemon-id-item'><p className='pokemon-name'>{pokemon.name}</p><p className='pokemon-id'>Nr. {pokemon.id}</p></div>
                    <div className='types flex-item'>
                        {
                          pokemon.types.map(type => 
                              <p className='tag' style={getTypeColor(type.type.name)} key={type.slot}>{type.type.name}</p>)
                        }
                      </div>
                    </div>
                </li>)
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Pokedex