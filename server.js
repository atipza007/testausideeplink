const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const folderPath = path.join(__dirname, '.well-known');

// app.get('/', (res) => {
//     // /.well-known/assetlinks.json
//       // console.log(folderPath);
//     // res.end('Hello World!');
//     // res.send("5555")
//   });

app.get('/.well-known/assetlinks.json', (req, res) => {
  // /.well-known/assetlinks.json
    // console.log(folderPath);
  const filePath = path.join(folderPath, 'assetlinks.json');

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('File not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});