var express  = require('express');
const PORT = process.env.NODE_ENV || 5000;

const app = express();
app.use(express.static(__dirname + '/dist/beraterboard-app'));
app.get('*', function(req, res) {
  res.sendFile('./dist/beraterboard-app/index.html'); 
  // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});

