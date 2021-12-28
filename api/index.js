//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {   
  console.log('%s listening at 3001')// eslint-disable-line no-console
  })
})
// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, async() => {
//     try {
//       const resultTypes = await axios.get(poketypes);
//       if(resultTypes.status >= 200 && resultTypes.status < 300){
//         const {results} = resultTypes.data;
//         const pokemonTypes = results.map(t => {
//           return Type.create({
//             name: t.name
//           })
//         })
//         await Promise.all(pokemonTypes).then(res => console.log("Lo Hicimos :D"))
//       }else{
//         console.log('Hubo un problema en la conexion con la API')
//       }
//     } catch (error) {
//       console.log("Hubo un problema en el llamado a la API o BD", error);
//     } finally {
//       console.log('%s listening at 3001'); // eslint-disable-line no-console
//     }
//   });
// });

