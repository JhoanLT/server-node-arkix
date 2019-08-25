const mongoose        = require('mongoose');
const Schema          = mongoose.Schema;

/**
 * Modelo de Noticias
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
const newsSchema = new Schema({
    title : {
        type     : String,
        required : [true, 'Title is required']
    },
    content : {
        type     : String,
        required : [true, 'Content is required']  
    },
    publication_date : {
        type     : String,
        default  : new Date(),
    },
    image_url : {
        type : String
    },
    user : {
        type : Schema.Types.ObjectId,
        ref  : 'User'
    }
});

module.exports = mongoose.model('News', newsSchema);