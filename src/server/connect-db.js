const { MongoClient } = require("mongodb")
// import { MongoClient } from 'mongodb';
const url = `mongodb://localhost:27017/myorganizer`
let db = null

 async function connectDB() {
    if(db) return db
    let client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    db = client.db()
    console.log("Go DB", db)
    return db
}

module.exports = {
    connectDB
}