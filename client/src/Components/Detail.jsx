
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {getDetail} from '../Redux/actions';


const Detail = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  const detail = useSelector((state) => state.detail)
  
  const regresarHome = (e) => {
    e.preventDefault();
    navigate('/home', {replace: true})
  }

  return (
    <div>
      <button onClick={regresarHome}>Home</button>
      <img src={detail.image} alt={`screen ${detail.name}`}/>
      <div>
        <label>Id: </label>
        <label>{detail.id}</label>
        <label>Name: </label>
        <label>{detail.name}</label>
        <label>Types: </label>
        <label>{detail.types ? detail.types.map(type => type) : detail.types}</label>
        <label>HP: </label>
        <label>{detail.hp}</label>
        <label>Attack: </label>
        <label>{detail.attack}</label>
        <label>Defense: </label>
        <label>{detail.defense}</label>
        <label>Speed: </label>
        <label>{detail.speed}</label>
        <label>Height: </label>
        <label>{detail.height}</label>
        <label>Weight: </label>
        <label>{detail.weight}</label>
      </div>
    </div>
  );
}
 
export default Detail;