const { Router } = require('express');
const router = Router();
const pokemons = require('./pokemon');
const types = require('./type');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use('/pokemons', pokemons);
router.use('/types', types);


module.exports = router;

