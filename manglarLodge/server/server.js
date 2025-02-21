
import {connectDB} from './db.js'
 import express from "express"
//  import mongoose from "mongoose";
import morgan from "morgan"
import router from './routes/authRoutes.js'
import cors from 'cors'


connectDB()

export const app = express()

app.use(cors({
    origin : 'http://localhost:5173',
}));

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);


app.listen(4000)
console.log('Server on port', 4000 );


export default app