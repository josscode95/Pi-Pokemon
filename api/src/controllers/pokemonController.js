const axios = require('axios');
const {Pokemon, Type} = require('../db.js');
const pokemons40 = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';

exports.nuevoPokemon = async(req, res, next) => {
  try {
    const {name, image, hp, attack, defense, speed, height, weight, type, inDatabase} = req.body;
    let objPokemon = {
      name: name.toLowerCase(), 
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      inDatabase
    }
    let newPokemon = await Pokemon.create(objPokemon);
    let typeDB = await Type.findAll({
      where: {name: type}
    })
    await newPokemon.addTypes(typeDB);
    res.json(newPokemon);
  } catch (error) {
    next(error);
  }
}

exports.idenPokemon = async(req, res, next) => {
  try {
    const {idPokemon} = req.params;
    if(idPokemon.length > 5){
      const pokemon = await Pokemon.findOne({
        where: {id: idPokemon}, 
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      });
      const {id, name, image, hp, attack, defense, speed, height, weight, types } = pokemon.dataValues;
      res.send({
        id,
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types: types.map(t => t.dataValues.name)
      })
    }else{
      const searchPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
      const {data} = searchPoke;
      res.send({
        id: data.id,
        name: data.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        image: data.sprites.other.home.front_default,
        types: data.types.map(e => e.type.name)
      });
    }
  } catch (error) {
    next(error);
  }
}

exports.traerPokemons = async(req, res, next) => {
  const {name} = req.query;
  if(name){
    try {
      var results = [];
      try {
        let pokeApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
        let objApi = {
          id: pokeApi.id,
          name: pokeApi.name,
          image: pokeApi.sprites.other.home.front_default,
          hp: pokeApi.stats[0].base_stat,
          attack: pokeApi.stats[1].base_stat,
          defense: pokeApi.stats[2].base_stat,
          speed: pokeApi.stats[5].base_stat,
          height: pokeApi.height,
          weight: pokeApi.weight,
          types: pokeApi.types.map(e => e.type.name)
        }
        if(pokeApi) results.push(objApi)
      } catch (error) {
        next();
      }
      try {
        //aca es
        let pokeDB = await Pokemon.findOne({
          where: {name}, 
          include: {
            model: Type,
            attributes: ["name"],
            through: {
              attributes: []
            }
          }
        });
     
        if(pokeDB !== null){
          //linea 125 cambiando e.dataValues.name a e.name
          let objDB = {
            id: pokeDB.dataValues.id,
            name: pokeDB.dataValues.name,
            image: pokeDB.dataValues.image,
            hp: pokeDB.dataValues.hp,
            attack: pokeDB.dataValues.attack,
            defense: pokeDB.dataValues.defense,
            speed: pokeDB.dataValues.speed,
            height: pokeDB.dataValues.height,
            weight: pokeDB.dataValues.weight,
            types: pokeDB.dataValues.Types.map(e => e.name),
            inDatabase: pokeDB.dataValues.inDatabase
          }
  
          pokeDB ? results.push(objDB) : null;
        }
      } catch (error) {
        console.log('No se encontro ese nombre en la DB')
        next(error);
      }
      results.length > 0 ? res.send(results) : res.json('Ese nombre no existe')
    } catch (error) {
      next(error);
    }
  }else{
    try {
      var apiPokes = (await axios.get(pokemons40)).data.results;
      var results = apiPokes.map(async(e) => {
        try {
          var pokes = (await axios.get(e.url)).data;
          let objPoke = {
            id: pokes.id,
            name: pokes.name,
            image: pokes.sprites.other.home.front_default,
            hp: pokes.stats[0].base_stat,
            attack: pokes.stats[1].base_stat,
            defense: pokes.stats[2].base_stat,
            speed: pokes.stats[5].base_stat,
            height: pokes.height,
            weight: pokes.weight,
            types: pokes.types.map(e => e.type.name)
          }
          return objPoke;
        } catch (error) {
          next(error)
        }
      })
      let dbPokes = await Pokemon.findAll({
        attributes: ['id', 'name', 'height', 'weight', 'hp', 'attack', 'defense', 'speed', 'image', 'inDatabase'],
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
      });
      if(dbPokes.length !== 0){
        dbPokes = dbPokes.map(p => p.toJSON())
        for(let i = 0; i < dbPokes.length; i++){
          dbPokes[i].types = dbPokes[i].types.map(type => type.name)
        }
      }
      await Promise.all(results)
        .then(d => {
          var pokemons = dbPokes.concat(d);
          res.send(pokemons);
        });
    } catch (error) {
      next(error);
    }
  }
}

