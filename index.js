import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/config/.env" });
const PORT = process.env.PORT;

const server = express();

server.get('/' , (req , res) => {
    res.json({ start: 'hello' });
});

server.listen( PORT , () => console.log(`Server runnig in PORT : ${PORT}`) );