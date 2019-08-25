const User   = require('../models/user');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

/**
 * Registrar un nuevo usuario
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
exports.register = (req, res) => {
    let body = req.body;
    let user = new User({
        name     : body.name,
        email    : body.email,
        password : bcrypt.hashSync(body.password, 10),
    });

    user.save((err, userDB) => {
        if(err){
            return res.status(400).json({
                ok    : false,
                exist : err.errors.email,
                err
            });
        }
        res.json({
            ok : true,
            userDB
        });
    });
};

/**
 * Login de usuario
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
exports.auth = (req, res) => {
    let body = req.body;

    User.findOne({email : body.email}, (err, user) => {
        if(err){
            return res.status(500).json({
                ok : false,
                err
            });
        }

        if(!user || !bcrypt.compareSync(body.password, user.password)){
            return res.status(400).json({
                ok      : false,
                message : 'Incorrect email or password',  
            });
        }

        //Token generate
        let token = jwt.sign({
            id    : user.id,
            email : user.email,
        }, 'secret-arkix', {expiresIn: 60*60});


        res.json({
            ok : true,
            token,
        });
    });
};

exports.get = (req, res) => {
    res.json({
        message : 'ok',
    });
};