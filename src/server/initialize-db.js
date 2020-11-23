const { initialState } = require('./initialState')
const { connectDB } = require('./connect-db')

// import { initialState } from './initialState'
// import { connectDB } from './connect-db'

async function initializeDB() {
    let db = await connectDB.connectDB()
    for (let collectionName in initialState.initialState) {
        let collection = db.collection(collectionName)
        await collection.insertMany(initialState[collectionName])
    }
}

initializeDB();

module.exports = {
    initializeDB
}