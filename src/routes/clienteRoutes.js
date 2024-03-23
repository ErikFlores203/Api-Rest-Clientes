const express = require('express')
const clienteSchema = require('../schemas/schema.js')

const router = express.Router()

// Create Cliente
router.post('/clientes', async(req,res) => {
    await clienteSchema.create(req.body)
    res.status(201).send({message: 'Creado con exito'})
})
// Get Clientes
router.get('/clientes', async(req, res)=> {
    const clientes = await clienteSchema.find({})
    res.status(200).send(clientes)
})
// Find One Cliente
router.get('/clientes/:id', async(req,res) =>{
    const cliente = await clienteSchema.findOne({ _id: req.params.id})
    res.status(200).send(cliente)
})
// Update Cliente
router.patch('/clientes/:id', async(req,res) => {
    await clienteSchema.findOneAndUpdate({ _id: req.params.id }, 
        req.body)
    res.status(200).send({message: 'cliente actualizado correctamente'})
})
// Update Estado
router.patch('/clientes/:id', async(req,res) => {
    await clienteSchema.findOneAndUpdate({ _id: req.params.id }, 
        req.body)
    res.status(200).send({message: 'Estado actualizado correctamente'})
})
// Delete Cliente
router.delete('/clientes/:id', async(req,res) =>{
    const cliente = await clienteSchema.findOneAndDelete({ _id: req.params.id})
    res.status(200).send({ message: 'cliente eliminado correctamente'})
})
module.exports = router
