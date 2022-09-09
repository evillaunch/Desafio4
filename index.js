const express = require("express")
const app = express()
const productosRouter = require("./productosRouter")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos",productosRouter)
app.use("/",express.static("assets"))
app.get('/',(req,res) => {
    res.send('<h1 style="color:blue;" >Bienvenidos al servidor express</h1>')
})

const server = app.listen(8080,()=>{
    console.log(`Servidor express iniciado en el puerto ${server.address().port} `)
})
