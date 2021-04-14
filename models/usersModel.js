const mongoose = require('../bin/mongodb');

const usersSchema = new mongoose.Schema({
        nameForm: {
            type: String
        },
        email: {
            type:String
        },
        
        phone: { 
            Number
        },
        
        option: {
            type:String
        },

        file: {
            type: Buffer,
            contentType: String
        },

        asunto: {
            type:String
        },

    });

    ////////////////////////////////// Creación de clase del Schema
    module.exports =  mongoose.model('users', usersSchema);