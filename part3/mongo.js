const mongoose = require('mongoose')
const connectionString = process.env.MONGO_DB_URI

// conexion a mongo db

mongoose.connect(connectionString)
  .then(() => {
    console.log('Conexion a mongo db establecida')
  }).catch(err => {
    console.error(err)
  })

// definir un Schema
