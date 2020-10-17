const  express = require("express");
const cors = require('cors');
require('dotenv').config();
const  bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

//servidor
const  app = express()
//habilitar cors
app.use(cors());
// parsa application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//parse a json
app.use(bodyParser.json());
//rutas
app.use(authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Escuchando en puerto ${process.env.PORT}`)
});
