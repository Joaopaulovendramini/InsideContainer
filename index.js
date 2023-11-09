const express = require('express');

const port = 3000;
const host = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {

    res.send('Hellou dockere :D'); 

});

app.listen(port, host);