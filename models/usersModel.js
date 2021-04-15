const mongoose = require('../bin/mongodb');

const usersSchema = new mongoose.Schema({
        nameForm: {
            type: String,
            require: true
        },
        email: {
            type:String,
            require: true
        },
        
        phone: { 
            type:Number
        },
        
        option: {
            type:String,
            require: true
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