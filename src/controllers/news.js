const News = require('../models/news');

/**
 * Registrar una nueva noticia
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
exports.register = (req, res) => {
    const body = req.body;

    let news = new News({
        title            : body.title,
        content          : body.content,
        publication_date : new Date(),
        image_url        : '',
        user             : req.user.id,
    });

    news.save((err, newsDB) => {
        if(err){
            return res.status(400).json({
                ok : false,
                err
            });
        }

        res.json({
            ok : true,
            newsDB
        });
    });
};

/**
 * Listar noticias por usuarios
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
exports.listByUser = (req, res) => {
    const user = req.user;

    let from = req.query.from || 0;
    from     = Number(from);

    let limit = req.query.limit || 10;
    limit     = Number(limit);

    News.find({user : user.id}, 'title content publication_date')
            .skip(from)
            .limit(limit)
            .exec((err, news) => {
                if(err){
                    return res.status(400).json({
                        ok : false,
                        err
                    
                    });
                }

                News.countDocuments({user : user.id}, (err, count) => {
                    res.json({
                        ok : true,
                        news,
                        total : count
                    });
                });
            })
};

/**
 * ELiminar una noticia
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
exports.delete = (req, res) => {
    const id = req.params.id;
    News.findByIdAndRemove(id, (err, newsDB) => {
        if(err){
            return res.status(500).json({
                ok : false,
                err,
            });
        }

        if(!newsDB){
            return res.status(400).json({
                ok      : false,
                message : 'News not found',
            });
        }

        res.json({
            ok      : true,
            message : 'Deleted news' 
        });
    });
}