const express = require("express")

const {Router} = express
const router = Router();

let Productos= []

router.get('/',(req,res) => {
    res.send({Productos})
})

router.get('/:id', (req,res) => {
    const {id} = req.params
    if(id>=1 && id<=Productos.length){
    const articulo = Productos.find((art)=>art.id == id)
    res.send({articulo})
    }else{
        res.send({ error : 'producto no encontrado' })
    }
})

router.post('/',(req,res)=>{
    const {title,price,thumbnail}= req.body
    const id = Productos.length + 1
    Productos.push({title,price,thumbnail,id})
    res.send({agregado: {title,price,thumbnail,id}})
})

router.put('/:id',(req,res)=>{
    const {id}= req.params
    if(id>=1 && id<=Productos.length){
        const {title,price,thumbnail} =req.body
        Productos[id-1] = {title,price,thumbnail,id}
        res.send({cambiado: {title,price,thumbnail,id}})
    }else{
        res.send({ error : 'producto no encontrado'})
    }
})

router.delete('/:id',(req,res)=>{
    const {id}= req.params
    if(id>=1 && id<=Productos.length){
        const artFiltrado= Productos.filter((item) => item.id !== id)
        Productos = artFiltrado
        res.send(`Se ha eliminado articulo con id ${id}`)
    }else{
        res.send({ error : 'producto no encontrado'})
    }
})

module.exports = router



