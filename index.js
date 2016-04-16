var express = require('express');
var path = require('path');

var sapper = express();

// public files
sapper.use('/public', express.static(__dirname + '/public'));

// index file
sapper.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

sapper.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('sapper server started, port: 3000');
});
