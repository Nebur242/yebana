import mongoose from 'mongoose';

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI , {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MongoDB connected : ${conn.connection.host}`)
}

export default connectDB;