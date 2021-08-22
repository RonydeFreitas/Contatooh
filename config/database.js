var mongoose = require('mongoose');

module.exports = uri => {
    mongoose.connect(`${uri}/contatooh`, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    mongoose.connection.on('connected', () => {
        console.log("Mongoose! Conectado em " + uri);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose! Desconectado em ', uri);
    });

    mongoose.connection.on('error', (erro) => {
        console.log('Mongoose! Erro na conexão', erro);
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose! Desconectado pelo termino da aplicação.')
            process.exit(0);
        })
    })
}