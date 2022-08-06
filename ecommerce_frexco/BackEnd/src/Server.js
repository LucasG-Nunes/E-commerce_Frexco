require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());

//forma de ler json
app.use(
    express.urlencoded({
        extended:true,
    }),
)
app.use(express.json())



//Rotas da API
const routes = require ('./Routes')
app.use('/produtos',routes)


//userconfig
const USER = process.env.USER ;
const PASSWORD = encodeURIComponent(process.env.PASSWORD);

//Conectando ao MongoDB e ao ter sucesso inicia o servidor.
app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://${USER}:${PASSWORD}@apicluster.jbocyvi.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3333);
    console.log("conectamos ao mongodb");
  })
  .catch((err) => {
    console.log(err);
  });