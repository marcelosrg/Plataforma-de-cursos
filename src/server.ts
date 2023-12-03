import express from "express";
import cors from "cors"
import { sequelize } from "./database";
import { AdminJsRouter, adminJs } from "./adminJs";
import { router } from "./routes";

const app = express()

app.use(cors({
     
}))


app.use(adminJs.options.rootPath, AdminJsRouter)

app.use(express.json())

app.use(express.static('public'))

app.use(router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
     sequelize.authenticate().then(() => {
          console.log('servidor conectado com sucesso')
     })

})