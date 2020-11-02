const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '../public');

app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
  res.send('Hello World! From server/index.js')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
