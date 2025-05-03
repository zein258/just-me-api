const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Server is up and running!');
  });

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Keep-alive server running on port ${PORT}`);
    });