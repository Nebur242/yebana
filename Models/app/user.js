import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    name:{
        type: String,
        required : [ true , 'Please add a name' ]
    },
    lastname:{
        type: String,
        required : [ true , 'Please add a lastname' ]
    },
    birthday:{
        type: Date,
    },
    birthplace:{
        type: Date,
    },   
    address:{
        type: String,
        required : [ true , 'Please add an address' ]
    }, 
    email: {
        type: String,
        required: [ true , 'Please add an email' ] ,
        unique: true,
        match: [
            /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            'Please enter a valid email'
        ]
    },
    sex: {
        type: String,
        enum: ['male' , 'female' , 'other' ],
        default: 'other'
    },
    step: {
        type: Number,
        enum: [1 , 2 , 3 ],
        default: 1
    },
    role: {
        type: String,
        enum: ['seller' , 'buyer' ],
        default: 'seller'
    },
    password: {
        type: String,
        required: [ true , 'Please add a password' ],
        minlength: 6,
        select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, { timestamps: true });

//Methods Sign JWT and return
UserSchema.methods.getSignedJWtToken = function () {
    return jwt.sign({ id: this._id } , process.env.JWT_SECRET , {
        expiresIn: process.env.JWT_EXPIRE
    })
}

//encrypt password using bcrypt
UserSchema.pre('save' , async function( next ) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt)
})

export default mongoose.model('User' , UserSchema);