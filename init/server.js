const express = require('express');
const app = express();
const path = require('path');

//serve the index.html file
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http:/localhost:3000');
})
