const Paginado = ({pokemonsPage, totalPokemons, paginate}) => {
  
  let pageNumbers = [];
  let form = Math.ceil(totalPokemons/pokemonsPage);
  for(let n = 1; n <= form; n++){
    pageNumbers.push(n);
  }

  return (
    <nav>
      {
        pageNumbers.map(n => (
          <button
            key={n}
            onClick={() => paginate(n)}
          >{n}</button>
        ))
      }
    </nav>
  );
}
 
export default Paginado;