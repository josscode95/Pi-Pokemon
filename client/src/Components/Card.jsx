import {useNavigate} from "react-router-dom";

const Card = ({id, name, image, types}) => {

  let navigate = useNavigate();
  //redireccionar
  const detailsClick = (e) => {
    e.preventDefault();
    navigate(`/details/${id}`, {replace: true});
  }

  return (
    <div>
      <img src={image} alt={`screen ${name}`} />
      <label>{name.toUpperCase()}</label>
      <label>
        {
          types && typeof types[0] === 'string' 
          ? types.map(t => t) 
          : types.map(obj => obj.name)
        }
      </label>
      <button
        onClick={detailsClick}
      >Details</button>
    </div>
  );
}
 
export default Card;