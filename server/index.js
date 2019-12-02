const express = require('express');
const path = require('path');
var controller = require('./controller.js');

const app = express();

app.set('port', 3000);
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/overviewgallery/sample/:locationId', (req, res) => {
  let locationId = req.params.locationId;
  controller.sampleQuery(locationId)
  .catch( err => {
    res.status(404).send(err);
  })
  .then( result => {
    res.status(200).send(result);
  });
});

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on:', app.get('port'));
}