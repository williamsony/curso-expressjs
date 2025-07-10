require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
console.log(`Server is running on port ${PORT}`);
app.get('/', (req, res) => {
  res.send(`
      <h1>Curso Express.js V4 rama Developer..</h1>
      <p>Esto es una aplicación node.js con express.js Test desde developer</p>
      <p>Corre en el puerto: ${PORT}</p>
    `);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port. ${PORT}`);
});
