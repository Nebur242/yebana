import express from 'express';
import dotenv from 'dotenv';

//middlewares
// import { logger } from './Middleware/Logger/logger.js';
import morgan from 'morgan'

//Route files
import users from './routes/admin/users.js';
import user from './routes/app/user.js';
import connectDB from './config/db.js';

//Load env vars
dotenv.config({ path: "./config/config.env" });

//PORT
const PORT = process.env.PORT || 5000;

//connect to database
connectDB()




//init server
const app = express();

//use middlewares
//dev middlewares
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Mount routers
//admin routes
app.use('/api/v1/admin/users' , users);

//app routes
app.use('/api/v1/user' , user);




const server = app.listen( PORT , () => console.log(`Server runnig in ${process.env.NODE_ENV} mode on PORT ${PORT}`) );

//handle unhandled rejections 
process.on('unhandledRejection' , (error , promise) => {
    console.log(`unhandled rejection error : ${error.message}`)

    server.close(() => process.exit(1));
})