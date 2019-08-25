const aws      = require('aws-sdk');
const multer   = require('multer');
const multerS3 = require('multer-s3');
 
aws.config.update({
  secretAccessKey: '',
  accessKeyId: '',
  region: ''
});


/**
 * Servicio para la carga de imágenes a Amazon S3
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
const s3 = new aws.S3({ /* ... */ });
const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'jholodev',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;