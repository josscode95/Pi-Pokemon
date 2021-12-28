const {Router} = require('express');
const router = Router();

const {
  nuevoPokemon,
  idenPokemon,
  traerPokemons
} = require('../controllers/pokemonController');

router.post('', nuevoPokemon);
router.get('', traerPokemons);
router.get('/:idPokemon', idenPokemon);


module.exports = router;
