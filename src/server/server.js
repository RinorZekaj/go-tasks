const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const { connectDB } = require("./connect-db")

// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser'

let port = 8888;
let app = express();

app.listen(port, console.log("Server listening on port ", port))

app.get('/', (req, res) => {
    res.send("hello world")
})

app.use(
    cors(),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json()
)

const addNewTask = async task => {
    let db = await connectDB();
    let collection = db.collection('tasks');
    await collection.insertOne(task)
}

const updateTask = async task => {
    let { id, group, isComplete, name } = task;
    let db = await connectDB();
    let collection = db.collection('tasks')

    if(group) {
        await collection.updateOne({id}, {$set: {group}})
    }

    if(isComplete !== undefined) {
        await collection.updateOne({id}, {$set: {isComplete}})
    }

    if(name) {
        await collection.updateOne({id}, {$set: {name}})
    }
}

app.post('/task/new', async (req, res) => {
    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send()
})

app.put('/task/update', async (req, res) => {
    let task = req.body.task;
    await updateTask(task);
    res.status(200).send()
})

module.exports = {
    addNewTask,
    updateTask
}