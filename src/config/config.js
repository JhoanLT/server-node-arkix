/**
 * ===================
 * ====== PORT =======
 */
process.env.PORT = process.env.PORT || 8080;

/**
 * ===================
 * === Enviroment ====
 */
 process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

 // =============
//  ==== DB ====
//  =============
let urlDB;
if (process.env.NODE_ENV === 'dev') { //Development
    urlDB = 'mongodb://localhost:27017/test-arkix';
} else {
    //Production
    urlDB = 'mongodb+srv://jholoDev:test-arkix@cluster0-usojm.mongodb.net/test-arkix?retryWrites=true&w=majority';
}
process.env.URLDB = urlDB;
