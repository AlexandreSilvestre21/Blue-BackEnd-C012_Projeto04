require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/personagens.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/personagens', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
