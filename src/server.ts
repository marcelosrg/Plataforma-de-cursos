import express from "express";
import { sequelize } from "./database";
import { AdminJsRouter, adminJs } from "./adminJs";
import { router } from "./routes";

const app = express()

app.use(adminJs.options.rootPath, AdminJsRouter)

app.use(express.static('public'))

app.use(router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
     sequelize.authenticate().then(() => {
          console.log('servidor conectado com sucesso')
     })

})