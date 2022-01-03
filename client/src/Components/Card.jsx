import {useNavigate} from "react-router-dom";

//Styles
import { 
  DivCard,
  ImgPoke,
  NamePoke,
  DivTypes,
  LabelTypes,
  BtnType 
} from "./Styles/Card";

const Card = ({id, name, image, types}) => {

  let navigate = useNavigate();
  //redireccionar
  const detailsClick = (e) => {
    e.preventDefault();
    navigate(`/details/${id}`, {replace: true});
  }

  return (
    <DivCard>
      <ImgPoke src={image} alt={`screen ${name}`} />
      <NamePoke>{name.toUpperCase()}</NamePoke>
      <DivTypes>
        {
          types && typeof types[0] === 'string' 
          ? types.map(t => <LabelTypes key={Math.random()}>{t}</LabelTypes>) 
          : types.map(obj => <LabelTypes key={Math.random()}>{obj.name}</LabelTypes> )
        }
      </DivTypes>
      <BtnType
        onClick={detailsClick}
      >Details</BtnType>
    </DivCard>
  );
}
 
export default Card;