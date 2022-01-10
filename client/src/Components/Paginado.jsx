import { 
  ContainerFooter,
  BtnFooter 
} from "./Styles/Paginado";
//                      9             40          fn
const Paginado = ({pokemonsPage, totalPokemons, paginate}) => {
  
  let pageNumbers = [];
  let form = Math.ceil(totalPokemons/pokemonsPage); // Math.ceil(4.444) => 5
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