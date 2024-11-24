import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { createUser, findUserById, getAllUsers, updateUser, deleteUser } from './user.service';
import { asyncHandler } from './user.utils';  // Importa o asyncHandler

const router = Router();

router.post(
    '/create',
    [
        body('email').isEmail().withMessage('Email inválido'),
        body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres')
    ],
    asyncHandler(async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const newUser = await createUser(req.body);
            return res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar usuário', error });
        }
    })
);

router.get(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
        const user = await findUserById(req.params.id);
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    })
);

router.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
        const users = await getAllUsers();
        return res.status(200).json(users);
    })
);

router.put(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
        const updatedUser = await updateUser(req.params.id, req.body);
        if (updatedUser) {
            return res.status(200).json(updatedUser);
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
        const deletedUser = await deleteUser(req.params.id);
        if (deletedUser) {
            return res.status(200).json({ message: 'Usuário excluído com sucesso' });
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    })
);

export default router;
