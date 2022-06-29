import express from "express";
import db from "./config/database.js";
import mhsRoutes from "./route/index.js"
import cors from 'cors';
const app = express();

try {
    await db.authenticate();
    console.log('db connect');
} catch (e) {
    console.log('db error', e);    
}

app.use(express.json());
app.use(cors())
app.use(mhsRoutes);

app.listen(5000, () => console.log('Server runing on PORT 5000'));