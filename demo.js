const http = require('http')
const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const htmlDirectory = path.join(__dirname);

app.get('/', (req, res) => {
    res.sendFile(path.join(htmlDirectory, 'index.html'));
  });
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

