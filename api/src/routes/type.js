const {Router} = require('express');
const router = Router();

const {
  traerTipos
} = require('../controllers/typeController');

router.get('', traerTipos);

module.exports = router;