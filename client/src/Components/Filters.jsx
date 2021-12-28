import {Fragment, useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {
  filterByAttack, 
  filterByName,
  filterCreator,
  filterPokemonByType,
  getPokemons,
  getTypes
} from "../Redux/actions";

const Filters = ({setPage, page}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());  
  }, [dispatch])

  const types = useSelector(state => state.types);

  const [ , setOrder] = useState('');

  const getOrderName = (element) => {
    element.preventDefault();
    dispatch(filterByName(element.target.value))
    if(page === 1) setOrder(`Ordenado ${element.target.value}`)
    else setPage(1);
  }

  const getOrderAttack = (element) => {
    element.preventDefault();
    dispatch(filterByAttack(element.target.value));
    if(page === 1) setOrder(`Ordenado ${element.target.value}`);
    else setPage(1);
  }

  const getFilterType = (element) => {
    dispatch(filterPokemonByType(element.target.value));
  }

  const getFilterCreator = (element) => {
    dispatch(filterCreator(element.target.value))
  }

  const resetFilter = (element) => {
    element.preventDefault();
    dispatch(getPokemons())
  }

  return (
    <Fragment>
      <select className="select" onChange={e => getOrderName(e)}>
        <option value="asc">Ascending Order</option>
        <option value="desc">Descending Order</option>
      </select>
      <br /> 
      <select className="select" onChange={e => getOrderAttack(e)}>
        <option value="strong">Stronger Attack</option>
        <option value="weak">Weaker Attack</option>
      </select>
      <br />
      <select className="select" onChange={e => getFilterType(e)}>
        <option value="all">All types</option>
        {
          types.map(type => (
            <option
              value={type.name}
              key={type.id}
            >{(type.name).toUpperCase()}</option>
          ))
        }
      </select>
      <br />
      <select className="select" onChange={e => getFilterCreator(e)}>
        <option value="all">All pokemons</option>
        <option value="api">Existing</option>
        <option value="created">Created</option>
      </select>
      <br />
      <button className="select" onClick={e => resetFilter(e)}>
        Reset Filters
      </button>
    </Fragment>
  );
}
 
export default Filters;