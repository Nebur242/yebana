import ErrorResponse from '../../../utils/errorResponse.js'

export const getUser = ( req , res , next ) => {
    //res.status(200).json({ success: true , msg: `get a user ${req.params.id}`});
    
    next(new ErrorResponse('test' , 400));
}

export const createUser = ( req , res , next ) => {
    res.status(200).json({ success: true , msg: 'create a user' });
}

export const updateUser = ( req , res , next ) => {
    res.status(200).json({ success: true , msg: `update a user ${req.params.id}`});
}

export const deleteUser = ( req , res , next ) => {
    res.status(200).json({ success: true , msg: `delete a user ${req.params.id}` });
}
