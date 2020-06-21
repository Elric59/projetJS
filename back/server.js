const express = require("express");
const router = require('./router');

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 8000;

const fileUpload = require('express-fileupload');

app.use('/img', express.static('img')).use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use('/video', express.static('video')).use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(router); // Requests processing will be defined in the file router
app.listen(port, () => console.log('Server app listening on port ' + port));
