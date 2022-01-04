import { Fragment } from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getNamePokemon} from '../Redux/actions';

//Styles
import { 
  InputSearch 
} from './Styles/Search';

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
  //no estoy dejando el cierre del input
  return (
    <Fragment>
      <InputSearch 
        type="text" 
        value={name}
        placeholder="Nombre del Pokemon..."
        onChange={(e) => obtenerNombre(e)}
      />
      <button
        className='btnSearch'
        onClick={(e) => buscarPokemon(e)}
      >Buscar</button>
      <button
        className='btnSearch'
        onClick={resetBuscador}
      >Reset</button>
    </Fragment>
  );
}
 
export default Search;