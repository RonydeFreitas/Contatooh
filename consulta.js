// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017/Contatooh';
// const dbName = 'contatooh';

// MongoClient.connect(url, function(err, client) {
//   const contatos = client.db(dbName).collection('contatos');
//   contatos.findOne({"Email": /cont2/}, function(err, contato) {
//       if(err) {throw err}
//         console.log(contato)
//         client.close();
//   });
// });