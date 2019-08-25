const express = require('express');
const router = express.Router();
const upload = require('../services/image_upload');

const singleUpload = upload.single('image');

/**
 * Carga de imagenes
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
router.post('/image-upload', function(req, res) {
  singleUpload(req, res, function(err) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}]});
    }

    return res.json({'imageUrl': req.file.location});
  });
});

module.exports = router;
