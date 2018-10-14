let https = require('https');
let fs = require('fs');
const url = require('url');
const path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
const dedup = require('./photoDedup');

let app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('assets'));
app.use(express.static('.'));

let dedupObj = new dedup.photoDedup('model.json');

const options = {
  key: fs.readFileSync('./domain.key'),
  cert: fs.readFileSync('./domain.crt')
};

https.createServer(options, app).listen(8080, function () {
  console.log("express listening on port 8080");
});

app.post('/dedupCheck', function (req, res) {
  console.log('duplicate check');
  let snap = req.body.data;
  //console.log('snap ' + req.body.data);
  let base64Data = snap.replace(/^data:image\/png;base64,/, "");
  fs.writeFile('./selfie.png', base64Data, 'base64', function (err) {
    if (err) {
      console.log('error ' + err);
    }
    else {
      let player = dedupObj.performPhotoDedup('selfie.png');
      //let resObj = { name: 'Viraat', fullName: 'viraat Kohli' };
      res.setHeader('Content-type', 'application/json');
      console.log('player is '+JSON.stringify(player));
      res.end(JSON.stringify(player));
    }

  });


  return;

});


