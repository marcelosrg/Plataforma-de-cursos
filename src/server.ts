import express from "express";
import { sequelize } from "./database";
import { AdminJsRouter, adminJs } from "./adminJs";

const app = express()

app.use(adminJs.options.rootPath, AdminJsRouter)

app.use(express.static('public'))

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
     sequelize.authenticate().then(() => {
          console.log('db conectado com sucesso')
     })

})