
import User from '../../../Models/app/user.js';
import asyncHandler from '../../../Middleware/asyncHandler.js';

//@desc     Register user
//@route    GET /api/v1/auth/register/first
//access    Public
export const registerFirst = asyncHandler(async ( req , res , next ) => {

    //res.status(200).json({ success: true });
    const { username , name , lastname, birthday , birthplace, address , email, sex , password , role } = req.body;

    //create user
    const user = await User.create({
        username,
        name,
        lastname,
        birthday,
        birthplace,
        address,
        email,
        sex,
        password,
    });

    const TOKEN = user.getSignedJWtToken();

    res.status(200).json({ 
        success: true,
        token: TOKEN
    });

});

//@desc     Register user step 2
//@route    POST /api/v1/auth/register/two
//access    Private, protected by a token
export const registerSecond = asyncHandler( async(req , res , next) => {
    res.status(200).json({
        success: true,
        step : 2
    })
} )


//@desc     Register user step 3
//@route    POST /api/v1/auth/register/third
//access    Private, protected by a token
export const registerThird = asyncHandler( async(req , res , next) => {
    res.status(200).json({
        success: true,
        step : 3
    })
} )