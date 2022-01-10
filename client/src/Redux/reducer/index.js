import {
  GET_ALL_POKEMONS,
  GET_TYPES,
  GET_NAME_POKEMON,
  FILTER_TYPE,
  FILTER_CREATOR,
  FILTER_NAME,
  FILTER_ATTACK,
  GET_DETAILS,
  CREATE_POKEMON
} from '../actions/index';

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: [],
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload
      }
    case GET_NAME_POKEMON:
      return {
        ...state,
        pokemons: action.payload
      }
    case CREATE_POKEMON:
      return {
        ...state
      }
    case FILTER_TYPE:
      const allPokemons = state.allPokemons;
      const filteredType = action.payload === 'all' ? allPokemons : allPokemons.filter(
        e => e.types[0] === action.payload || 
             e.types[1] === action.payload ||
             e.types[2] === action.payload
      )
      return {
        ...state,
        pokemons: filteredType,
        loading: true
      }
    case FILTER_CREATOR:
      const resAllPokemons = state.allPokemons;
      const createdFilter = action.payload === 'created' 
                          ? resAllPokemons.filter(e => e.inDatabase) 
                          : resAllPokemons.filter(e => !e.inDatabase)
      return {
        ...state,
        pokemons: action.payload === 'all' ? state.allPokemons : createdFilter
      }
    case FILTER_NAME:
      let allPokes = state.allPokemons;
      let sortedArr = action.payload === 'asc' 
      ? allPokes.sort(function(a, b){
          if(a.name > b.name){
            return 1;
          }
          if(b.name > a.name){
            return -1;
          }
          return 0;
        })
      : allPokes.sort(function(a, b){
          if(a.name > b.name){
            return -1;
          }
          if(b.name > a.name){
            return 1;
          }
          return 0;
        })
      return {
        ...state,
        pokemons: sortedArr
      }
    case FILTER_ATTACK: //pokemons a allpokemons
      let sortedAttack = action.payload === 'strong'
      ? state.allPokemons.sort((a, b) => {
          if(a.attack > b.attack) return -1;
          if(b.attack > a.attack) return 1;
          return 0;
        })
      : state.allPokemons.sort((a, b) => {
          if(a.attack > b.attack) return 1;
          if(b.attack > a.attack) return -1;
          return 0;
        })
      return {
        ...state,
        pokemons: sortedAttack
      }
    case GET_TYPES:
      return {
        ...state,
        types: action.payload
      }
    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload
      }
    default:
      return state
  }
}

export default reducer;