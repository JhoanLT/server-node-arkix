require('./src/config/config');
const mongoose   = require('mongoose');
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cors       = require('cors')

//Routes
const userRoutes = require('./src/routes/user');
      newsRoutes = require('./src/routes/news');

//DB conection
mongoose.connect(process.env.URLDB,{useNewUrlParser : true, useCreateIndex : true},(err, res) => {
    if (err) throw err;
    console.log('DB Sucess!!');

});

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/news', newsRoutes);

//Server
app.listen(process.env.PORT, function () {
     console.log("Running server on port " + process.env.PORT);
});