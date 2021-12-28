import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getNamePokemon} from '../Redux/actions';

const Search = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const obtenerNombre = (element) => {
    element.preventDefault();
    setName(element.target.value)
  }

  const buscarPokemon = (element) => {
    element.preventDefault();
    dispatch(getNamePokemon(name))
  }

  const resetBuscador = () => {
    setName("");
  }

  return (
    <div>
      <input 
        type="text" 
        value={name}
        placeholder="Nombre del Pokemon..."
        onChange={(e) => obtenerNombre(e)}
      ></input>
      <button 
        type="submit"
        onClick={(e) => buscarPokemon(e)}
      >Buscar</button>
      <button
        onClick={resetBuscador}
      >Reset</button>
    </div>
  );
}
 
export default Search;