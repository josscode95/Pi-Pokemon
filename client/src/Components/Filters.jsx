import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {
  filterByAttack, 
  filterByName,
  filterCreator,
  filterPokemonByType,
  getPokemons,
  getTypes
} from "../Redux/actions";

//Styles
import { 
  ContainerSelect,
  ItemSelect,
  Label,
  Select 
} from "./Styles/Filters";

const Filters = ({setPage, page, paginate}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes()); 
  }, [dispatch])

  const types = useSelector(state => state.types);
  const [, setOrder] = useState('');

  const getOrderName = (element) => {
    element.preventDefault();
    dispatch(filterByName(element.target.value))
    setPage(1)
    // if(page === 1) setOrder(`Ordenado ${element.target.value}`)
    // else paginate(1);
  }

  const getOrderAttack = (element) => {
    element.preventDefault();
    dispatch(filterByAttack(element.target.value));
    setPage(1)
    // if(page === 1) setOrder(`Ordenado ${element.target.value}`);
    // else paginate(1);
  }

  const getFilterType = (element) => {
    dispatch(filterPokemonByType(element.target.value));
    setPage(1)
  }

  const getFilterCreator = (element) => {
    dispatch(filterCreator(element.target.value));
    setPage(1)
  }

  const resetFilter = (element) => {
    element.preventDefault();
    dispatch(getPokemons())
  }

  return (
    <ContainerSelect>
      <ItemSelect>
        <Label>Order ASC - DESC</Label>
        <Select onChange={(e) => getOrderName(e)}>
          <option value="asc">Ascending Order</option>
          <option value="desc">Descending Order</option>
        </Select>
      </ItemSelect>
      <ItemSelect>
        <Label>Order For Attack</Label>
        <Select onChange={(e) => getOrderAttack(e)}>
          <option value="strong">Stronger Attack</option>
          <option value="weak">Weaker Attack</option>
        </Select>
      </ItemSelect>
      <ItemSelect>
        <Label>Filter by Type</Label>
        <Select onChange={(e) => getFilterType(e)}>
          <option value="all">All types</option>
          {
            types.map(type => (
              <option
                value={type.name}
                key={type.id}
              >{(type.name).toUpperCase()}</option>
            ))
          }
        </Select>
      </ItemSelect>
      <ItemSelect>
        <Label>Filter for DB or API</Label>
        <Select onChange={(e) => getFilterCreator(e)}>
          <option value="all">All pokemons</option>
          <option value="api">Existing</option>
          <option value="created">Created</option>
        </Select>
      </ItemSelect>
      <button onClick={e => resetFilter(e)}>
        Reset Filters
      </button> 
    </ContainerSelect>
  );
}
 
export default Filters;