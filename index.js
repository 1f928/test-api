const express = require('express');
const cors = require('cors');

const port = 3100;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Woo! You hit the test API.');
});

app.listen(port, () => {
  console.log(`Running [test-api] on port [${port}].`);
});
