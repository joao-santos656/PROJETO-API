import express from 'express';
import { createUser, findUserById } from './user.service';

const router = express.Router();

router.post('/create', async (req, res) => {
    const user = await createUser();
    res.json(user);
});

router.get('/:id', async (req, res) => {
    const user = await findUserById(req.params.id);
    if (!user) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(user);
    }
});

export default router;

