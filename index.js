const express = require('express');
const cors = require('cors');

const port = 3100;
const app = express();
require('express-ws')(app);
app.use(cors());

app.get('/', (req, res) => {
  res.send('Woo! You hit the test API.');
});

app.ws('/ws', (req, res) => {
  ws.on('message', (msg) => {
    ws.send(msg);
  });
});

app.listen(port, () => {
  console.log(`Running [test-api] on port [${port}].`);
});
