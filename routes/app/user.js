import express from 'express';
import { createUser , getUser , deleteUser , updateUser } from '../../Controllers/app/user/user.js';

const router = express.Router();


router.route('/').post(createUser);
router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)



/* router.get('/:id' , (req , res) => {
    res.status(200).json({ success: true , msg: `get a user ${req.params.id}`});
});

router.post('/' , (req , res) => {
    res.status(200).json({ success: true , msg: 'create a user' });
});

router.put('/:id' , (req , res) => {
    res.status(200).json({ success: true , msg: `update a user ${req.params.id}`});
});

router.delete('/:id' , (req , res) => {
    res.status(200).json({ success: true , msg: `delete a user ${req.params.id}` });
}); */


export default router;