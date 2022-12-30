import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js'
import Cors from 'cors'
//App Config
const app=express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://Arati_Khatale:Shani@123@cluster0.ws6qex2.mongodb.net/tinderDB'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Configure
mongoose.connect(connection_url)

//API Endpoint 
app.get('/', (req, res) => res.status(200).send("Hello TWD"))

app.post('/tinder/cards', (req, res) => {
    const dbCards = req.body
    Cards.create(dbCards, (err, data) => {
        if(err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

//listener
app.listen(port, () => console.log(`Listening on localHost: ${port}`))