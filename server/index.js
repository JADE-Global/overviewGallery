const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// GET /overviewgallery/:restaurantId

app.get('/', (req, res) => { 
    res.status(200).send('Hello World!');
});

if (!module.parent) {
    app.listen(app.get('port'));
    console.log('Listening on:', app.get('port'));
}