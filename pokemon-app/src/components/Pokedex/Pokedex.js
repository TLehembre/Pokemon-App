import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokedex.css';
import { Button } from 'react-bootstrap';

function getTypeColor(type) {
  let color;

  switch(type) {
    case 'grass': color = '#95C24D';
    break;
    case 'fire': color = '#FD7D25';
    break;
    case 'water': color = '#4592C3';
    break;
    case 'poison': color = '#BA7EC8';
    break;
    case 'electric': color = 'yellow';
    break;
    case 'flying': color = 'red';
    break;
    case 'bug': color = 'darkgreen';
    break;
    case 'rock': color = 'gray';
    break;
    case 'psychic': color = 'pink';
    break;
    case 'normal': color = '#A3ACAE';
    break;
    case 'ghost': color = '#7B62A3';
    break;
    default: color = 'black';
  }

    return {backgroundColor: color}
  
}

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
    </>
  )
}

export default Pokedex