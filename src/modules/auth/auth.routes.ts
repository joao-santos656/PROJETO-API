import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { authService } from './auth.service';

const router = Router();

router.post('/login', [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres')
], async (req: Request, res: Response): Promise<Response> => {
    // Verifica se existem erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;

        // Chama o serviço de autenticação de forma assíncrona
        const user = await authService.login(email, password);

        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Envia a resposta de sucesso
        return res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch (error) {
        // Envia um erro de servidor
        return res.status(500).json({ message: 'Erro no servidor', error });
    }
});

export default router;
