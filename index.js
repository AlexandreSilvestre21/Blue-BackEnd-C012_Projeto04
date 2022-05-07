require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/personagens.route');
const connectToDatabase = require('./src/database/database');

const userRoute = require("./src/routes/users.route");
const authRoute = require("./src/auth/auth.route");

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/personagens', routes);

app.use("/users", userRoute);

app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
