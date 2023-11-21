import express from "express";
import { sequelize } from "./database";

const app = express()

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
     sequelize.authenticate().then(() => {
          console.log('db conectado com sucesso')
     })
     console.log(`servidor iniciado com sucesso na porta: ${PORT}`)

})