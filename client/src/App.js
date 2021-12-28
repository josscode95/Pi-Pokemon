import {Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import LadingPage from './Components/LandingPage';
import Home from './Components/Home';
import CreatePokemon from './Components/CreatePokemon';
import Detail from './Components/Detail';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<LadingPage />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/pokemon" element={<CreatePokemon />}/>
        <Route exact path="/details/:id" element={<Detail />} />
      </Routes>
    </Fragment>
  );
}

export default App;
