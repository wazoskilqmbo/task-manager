import express from 'express';
import * as dotenv from 'dotenv';
import tasks from './routes/tasks.js';
import connect_to_DB from './src/connectDB.js'

dotenv.config()
const app = express();
const PORT = process.env.PORT

//!middleware
app.use(express.static('./public'))
app.use(express.json())

//!Routes imports
app.use('/api/v1/tasks',tasks);


const start = async() =>{
    try {
        await connect_to_DB()
        app.listen(PORT);
    } catch (error) {
        console.log(error)
    }
}

start()

