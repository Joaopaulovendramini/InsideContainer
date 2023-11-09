const express = require('express');

const port = 3000;
const host = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {

    res.send('Hellou docker :D'); 

});

app.listen(port, host);