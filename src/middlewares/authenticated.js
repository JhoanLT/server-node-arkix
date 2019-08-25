const jwt = require('jsonwebtoken');

/**
 * Verificación de token
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let tokenVerify = (req, res, next) => {
    let token = req.get('Authorization');

    jwt.verify( token, 'secret-arkix', (err, decoded) => {
        if(err){
            return res.status(401).json({
                ok : false,
                err,
            });
        }

        req.user = decoded;
        next();
    });
};

module.exports = {
    tokenVerify
}