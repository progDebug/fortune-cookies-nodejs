const express = require('express')
// const db = require('./dbConnection')
const frases = require("./mockup")

const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// Consumindo dados do arquivo mockup
//--------------------------------------------
app.get('/', (req, res) => {
  res.render('index', {frases: frases})

});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});