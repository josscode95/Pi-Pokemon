import { Fragment } from "react";
import {Link} from 'react-router-dom';
import fondo from '../Assets/intro.jpg';

const LadingPage = () => {
  return (
    <Fragment>
      <img src={fondo} alt="pokemon" />
      <Link to="/home">
        <button>START</button>
      </Link>
    </Fragment>
  );
}
 
export default LadingPage;