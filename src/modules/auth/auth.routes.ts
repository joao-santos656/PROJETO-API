import { Router } from 'express';
import { body } from 'express-validator';
import { asyncHandler } from './auth.utils';
import { authService } from './auth.service';

const router = Router();

router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Email inválido'),
        body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
    ],
    asyncHandler(async (req: { body: { email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; user?: { id: string; name: string; email: string; }; }): any; new(): any; }; }; }) => {
        const { email, password } = req.body;
        const user = await authService.login(email, password);

        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        return res.status(200).json({ message: 'Login bem-sucedido', user });
    })
);

export default router;
