const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/uep', {useNewUrlParser: true, useUnifiedTopology: true}, function(error) {
    if(error) {
        throw error;
    } else {
        console.log('Conectado a MongoDb');
    }
});

module.exports = mongoose;