const {Type} = require('../db.js');
const axios = require('axios');

exports.traerTipos = async(req, res, next) => {
  try {
    const apiTypes = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
    apiTypes.forEach((e) => {
      Type.findOrCreate({
        where: {
          name: e.name
        }
      })
    }) 
    const infoTypesDB = await Type.findAll();
    res.send(infoTypesDB);
  } catch (error) {
    next(error)
  }
}