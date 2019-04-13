var express  = require('express');
const PORT = 5000;

const app = express();
app.get('*', function(req, res) {
  res.sendFile('/dist/beraterboard-app/index.html'); 
  // load the single view file (angular will handle the page changes on the front-end)
});

//app.use(express.static(__dirname + '/dist/beraterboard-app'));


app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});

