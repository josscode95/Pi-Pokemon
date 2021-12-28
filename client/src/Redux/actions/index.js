import axios from 'axios';

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_NAME_POKEMON = "GET_NAME_POKEMON";
export const GET_DETAILS = "GET_DETAILS";
export const CREATE_POKEMON = "CREATE_POKEMON"
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_CREATOR = "FILTER_CREATOR";
export const FILTER_NAME = "FILTER_NAME";
export const FILTER_ATTACK = "FILTER_ATTACK";

export const getPokemons = () => async(dispatch) => {
  try {
    let response = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type: GET_ALL_POKEMONS,
      payload: response.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getTypes = () => async(dispatch) => {
  try {
    let response = (await axios.get("http://localhost:3001/types")).data;
    return dispatch({
      type: GET_TYPES,
      payload: response
    })
  } catch (error) {
    console.log(error);
  }
}

export const getDetail = (id) => async(dispatch) => {
  try {
    let response = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data;
    return dispatch({
      type: GET_DETAILS,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const getNamePokemon = (name) => async(dispatch) => {
  try {
    let response = (await axios.get(`http://localhost:3001/pokemons?name=${name.toLowerCase()}`)).data;
    return dispatch({
      type: GET_NAME_POKEMON,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const createPokemon = (payload) => async(dispatch) => {
  try {
    let response = await axios.post("http://localhost:3001/pokemons", payload);
    return response;
  } catch (error) {
    console.log(error)
  }
}

export const filterPokemonByType = (payload) => {
  return {
    type: FILTER_TYPE,
    payload
  }
}

export const filterCreator = (payload) => {
  return {
    type: FILTER_CREATOR,
    payload
  }
}

export const filterByName = (payload) => {
  return {
    type: FILTER_NAME,
    payload
  }
}

export const filterByAttack = (payload) => {
  return {
    type: FILTER_ATTACK,
    payload
  }
}

