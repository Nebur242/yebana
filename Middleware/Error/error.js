import ErrorResponse from "../../utils/errorResponse.js";

const errorHandler = ( err , req , res , next ) => {

    let error = { ...err , message: err.message }

    //log to console for dev
    console.log(err.stack.red)

    //Mongoose bad objectId
    if(err.name === 'CastError'){
        const message = `Bootcamp not found with the id of ${err.value}`;
        error = new ErrorResponse(message , 404);
    }

    //Handle Mongoose duplicate error
    if(err.code === 11000){
        const message = `Already exist`;
        error = new ErrorResponse(message , 400);
    }

    //Mongoose validatorErrors
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message , 400);
    }

    //send response 
    res.status( err.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
}

export default errorHandler;