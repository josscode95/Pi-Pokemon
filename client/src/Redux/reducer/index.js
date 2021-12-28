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
  detail: []
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        allPokemons: payload
      }
    case GET_NAME_POKEMON:
      return {
        ...state,
        pokemons: payload
      }
    case CREATE_POKEMON:
      return {
        ...state
      }
    case FILTER_TYPE:
      const allPokemons = state.allPokemons;
      const filteredType = payload === 'all' ? allPokemons : allPokemons.filter(
        e => e.types[0] === payload || 
             e.types[1] === payload ||
             e.types[2] === payload
      )
      return {
        ...state,
        pokemons: filteredType
      }
    case FILTER_CREATOR:
      const resAllPokemons = state.allPokemons;
      const createdFilter = payload === 'created' 
                          ? resAllPokemons.filter(e => e.inDatabase) 
                          : resAllPokemons.filter(e => !e.inDatabase)
      return {
        ...state,
        pokemons: payload === 'all' ? state.allPokemons : createdFilter
      }
    case FILTER_NAME:
      let sortedArr = payload === 'asc' 
      ? state.allPokemons.sort((a, b) => {
          if(a.name > b.name) return 1;
          if(b.name > a.name) return -1;
          return 0
        })
      : state.allPokemons.sort((a, b) => {
          if(a.name > b.name) return -1;
          if(b.name > a.name) return 1;
          return 0
        })
      return {
        ...state,
        pokemons: sortedArr
      }
    case FILTER_ATTACK: //pokemons a allpokemons
      let sortedAttack = payload === 'strong'
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
        types: payload
      }
    case GET_DETAILS:
      return {
        ...state,
        detail: payload
      }
    default:
      return state
  }
}

export default reducer;