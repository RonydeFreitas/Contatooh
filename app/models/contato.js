var mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index : {
                unique: true
            }
        }
    });
    return mongoose.model('Contato', schema);
}