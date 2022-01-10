const {Router} = require('express');
const router = Router();

const {
  nuevoPokemon,
  idenPokemon,
  traerPokemons,
  borrarPokemon
} = require('../controllers/pokemonController');

router.post('', nuevoPokemon);
router.get('', traerPokemons);
router.get('/:idPokemon', idenPokemon);
router.delete('/:id', borrarPokemon);


module.exports = router;
