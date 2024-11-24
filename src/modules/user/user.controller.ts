import { Request, Response } from 'express';
import { createUser, findUserById, getAllUsers, updateUser, deleteUser } from './user.service';

export const createUserController = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {  // Tipo 'any' para capturar qualquer erro
        res.status(500).json({ error: 'Erro ao criar usuário', message: error.message });
    }
};

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const user = await findUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: 'Erro ao buscar usuário', message: error.message });
    }
};

export const getAllUsersController = async (_req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: 'Erro ao buscar usuários', message: error.message });
    }
};

export const updateUserController = async (req: Request, res: Response) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error: any) {
        res.status(500).json({ error: 'Erro ao atualizar usuário', message: error.message });
    }
};

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        await deleteUser(req.params.id);
        res.status(204).send();
    } catch (error: any) {
        res.status(500).json({ error: 'Erro ao deletar usuário', message: error.message });
    }
};
