import express from 'express';

const router = express.Router();


router.get('/' , (req , res) => {
    res.status(200).json({ success: true , msg: 'shoow all users' });
});

router.post('/' , (req , res) => {
    res.status(200).json({ success: true , msg: 'create a user' });
});

router.put('/:id' , (req , res) => {
    res.status(200).json({ success: true , msg: `update a user ${req.params.id}`});
});

router.delete('/:id' , (req , res) => {
    res.status(200).json({ success: true , msg: `delete a user ${req.params.id}` });
});


export default router;
