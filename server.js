const express = require('express');
const path = require('path');
const azure = require('./azure');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname+ '/client/build')));

// An api endpoint that returns a short list of items.
app.get('/api/list', async (req, res) => {
  const table = req.query['table'];
  const particianKey = req.query['particianKey'];
  const result = await azure.query(table, particianKey);
  if (result)
    res.json(result);
  else
    res.json('no entry for ' + url)
});

// An api endpoint that returns a short list of items.
app.post('/api/suggest', async (req, res) => {
  const suggested_url = req.query['suggested_url'];
  const webapp_kind = req.query['webapp_kind'];
  const result = await azure.add(suggested_url, webapp_kind);
  if (result)
    res.json(result);
  else
    res.json('no entry for ' + url)
});

// Handles any requests that don't match the ones above.
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000; // 5000 for concurrently with client.
app.listen(port);

console.log('App is listening on port ' + port);
