const Config = require('@moovies/config');
const express = require('express');
const { oimdbApi } = require('./routes/index.js');
const ErrorMiddleware = require('./middlewares/error.middleware.js');


const app = express();

app.use('/oimdb', oimdbApi);
app.use(ErrorMiddleware);


app.listen(Config.port, () => {
    console.log(`Server running on the port ${Config.port}`);
});
