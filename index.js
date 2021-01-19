import express from 'express';
import dotenv from 'dotenv';

//Load env vars
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/' , (req , res) => {
    res.json({ start: 'hello' });
});

app.listen( PORT , () => console.log(`Server runnig in ${process.env.NODE_ENV} mode on PORT ${PORT}`) );