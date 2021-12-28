import {Link} from 'react-router-dom';
import fondo from '../Assets/intro.jpg';
import {
  DivLanding,
  ImgLanding,
  LinkText
} from "./Styles/LandingPage";

const LadingPage = () => {
  return (
    <DivLanding>
      <ImgLanding src={fondo} alt="pokemon" />
      <Link to="/home">
        <LinkText>START</LinkText>
      </Link>
    </DivLanding>
  );
}
 
export default LadingPage;