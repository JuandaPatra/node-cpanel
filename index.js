const express = require('express');
const app =express()
require('dotenv').config()
app.use(express.json())
const PORT = process.env.PORT || 2000

app.get('/', (req, res)=>{
    res.status(200).send(`<h1> Welcome to Node CI CD Apps </h1>`)
})

app.get('/demo', (req,res)=>{
    res.status(200).sed(`<h1>Dsasasemo page</h1>`)
})


app.listen(PORT, ()=> console.log(`magic happens in PORT : ${PORT}`))