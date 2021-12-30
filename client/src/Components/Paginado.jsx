import { 
  ContainerFooter,
  BtnFooter 
} from "./Styles/Paginado";

const Paginado = ({pokemonsPage, totalPokemons, paginate}) => {
  
  let pageNumbers = [];
  let form = Math.ceil(totalPokemons/pokemonsPage);
  for(let n = 1; n <= form; n++){
    pageNumbers.push(n);
  }

  return (
    <ContainerFooter>
      {
        pageNumbers.map(n => (
          <BtnFooter
            key={n}
            onClick={() => paginate(n)}
          >{n}</BtnFooter>
        ))
      }
    </ContainerFooter>
  );
}
 
export default Paginado;