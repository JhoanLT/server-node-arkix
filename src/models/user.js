const mongoose        = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); 
const Schema          = mongoose.Schema;

/**
 * Modelo de usuarios
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
const userSchema = new Schema({
    name : {
        type     : String,
        required : [true, 'Name is required']
    },
    email : {
        type     : String,
        unique   : true,
        required : [true, 'Email is required']  
    },
    password : {
        type     : String,
        required : [true, 'Password is required']
    },
});

userSchema.plugin(uniqueValidator, {message : 'El {PATH} debe ser único'});

module.exports = mongoose.model('User', userSchema);