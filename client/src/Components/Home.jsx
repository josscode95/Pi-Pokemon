import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

//Components
import Search from "./Search";
import Card from './Card';
import Pagination from './Paginado';

//Styles
import { 
  DivContainer,
  Title,
  DivSearch,
  DivFilters,
  ContainerPokes,
  ContainerCards,
  Footer,
  ContainerSelect,
  ItemSelect,
  Label,
  Select 
} from './Styles/Home';

import {
  filterByAttack, 
  filterByName,
  filterCreator,
  filterPokemonByType,
  getPokemons,
  getTypes
} from '../Redux/actions'

const Home = () => {

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons)
  const types = useSelector(state => state.types);
  const cargando = useSelector(state => state.loading)

  //paginado
  const pokemonsPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const indexLastPokemon = currentPage * pokemonsPage; // 1 * 9 
  const indexFirstPokemon = indexLastPokemon - pokemonsPage; // 9 - 9
  const currentPokemons = pokemons.slice(indexFirstPokemon, indexLastPokemon); // slice(0, 9)
 
  const [poke, setPoke] = useState(false);

  //obtener los pokemons
  useEffect(() => {
    dispatch(getPokemons()); 
    dispatch(getTypes());
    // eslint-disable-next-line.
  }, [dispatch])

  useEffect(() => {
  }, [poke])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const getOrderName = (element) => {
    dispatch(filterByName(element.target.value))
    setCurrentPage(1)
    if(poke){
      setPoke(false)
    }else{
      setPoke(true)
    }
  }

  const getOrderAttack = (element) => {
    dispatch(filterByAttack(element.target.value));
    setCurrentPage(1)
    if(poke){
      setPoke(false)
    }else{
      setPoke(true)
    }
  }

  const getFilterType = (element) => {
    dispatch(filterPokemonByType(element.target.value));
    setCurrentPage(1)
  }

  const getFilterCreator = (element) => {
    dispatch(filterCreator(element.target.value));
    setCurrentPage(1)
  }

  const resetFilter = (element) => {
    element.preventDefault();
    dispatch(getPokemons())
  }

  return (
    <DivContainer>
      <Title>Pokemon PI</Title>
      <DivSearch>
        <Search />
      </DivSearch>
      <Link to="/pokemon" className='container__create'>
        <button className='btnCreate'>Create Pokemon</button>
      </Link>
      <DivFilters>
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
      </DivFilters>
      <ContainerPokes>
        <ContainerCards>
          {
            pokemons.length > 0
            ? typeof currentPokemons === 'object'
              ? currentPokemons.map(pokes => 
                typeof pokes === 'object'
                ? <Card 
                    key={pokes.id}
                    id={pokes.id}
                    name={pokes.name}
                    image={pokes.image}
                    types={pokes.types}
                  /> 
                : null
              ) 
              : <p>Ese pokemon no existe ni en la API ni en la BD</p>
            : cargando && pokemons.length === 0 ? <p>No se encontro pokemon</p> : <p>Cargando...</p>
          }
        </ContainerCards>
      </ContainerPokes>
      <Footer>
        {
          pokemons.length > pokemonsPage
          ? <Pagination 
              pokemonsPage={pokemonsPage}
              totalPokemons={pokemons.length}
              paginate={paginate}
            />
          : <br></br>
        }
      </Footer>
    </DivContainer>
  );
}
 
export default Home;