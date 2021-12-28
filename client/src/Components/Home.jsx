import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getPokemons} from "../Redux/actions";

//Components
import Search from "./Search";
import Filters from './Filters';
import Card from './Card';
import Pagination from './Paginado';

const Home = () => {

  const dispatch = useDispatch();

  //obtener los pokemons
  useEffect(() => {
    dispatch(getPokemons()) 
    // eslint-disable-next-line.
  }, [dispatch])

  //paginado
  const pokemons = useSelector((state) => state.pokemons)
  const pokemonsPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const indexLastPokemon = currentPage * pokemonsPage;
  const indexFirstPokemon = indexLastPokemon - pokemonsPage;
  const currentPokemons = pokemons.slice(indexFirstPokemon, indexLastPokemon);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <Search />
      <hr />
      <Link to="/pokemon">
        <button>Create Pokemon</button>
      </Link>
      <hr />
      <div>
        <Filters
          setPage={setCurrentPage}
          page={currentPage}
        />
      </div>
      <div>
        {
          pokemons.length !== 0 
          ? currentPokemons.map(p => (
            typeof p === 'object'
            ? <Card 
                key={p.id}
                id={p.id}
                name={p.name}
                image={p.image}
                types={p.types}
              /> 
            : <h3>Loading...</h3>
          ))
          : <h3>Loading...</h3>
        }
      </div>
      {
        pokemons.length > pokemonsPage
        ? <Pagination 
            pokemonsPage={pokemonsPage}
            totalPokemons={pokemons.length}
            paginate={paginate}
          />
        : <br></br>
      }
    </div>
  );
}
 
export default Home;