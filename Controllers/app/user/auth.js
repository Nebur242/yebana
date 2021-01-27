
import User from '../../../Models/app/user.js';
import asyncHandler from '../../../Middleware/asyncHandler.js';

//@desc     Register user
//@route    GET /api/v1/auth/register
//access    Public
export const register = asyncHandler(async ( req , res , next ) => {

    //res.status(200).json({ success: true });
    const { name , email , password , role } = req.body;

    //create user
    const user = await User.create({
        name,
        email,
        password,
        role
    });

    const TOKEN = user.getSignedJWtToken();

    res.status(200).json({ 
        success: true,
        token: TOKEN
    });

});