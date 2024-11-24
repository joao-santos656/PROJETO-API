import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { asyncHandler } from './course.utils';
import { createCourse, getCourseById, getAllCourses, updateCourse, deleteCourse } from './course.service';

const router = Router();

// Rota para criar um novo curso
router.post(
    '/create',
    [
        body('title').notEmpty().withMessage('Título é obrigatório'),
        body('description').notEmpty().withMessage('Descrição é obrigatória'),
        body('duration').isInt({ min: 1 }).withMessage('Duração deve ser um número positivo')
    ],
    asyncHandler(async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, duration } = req.body;

        try {
            const newCourse = await createCourse({ title, description, duration });
            return res.status(201).json({ message: 'Curso criado com sucesso', course: newCourse });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar curso', error });
        }
    })
);

// Rota para obter um curso específico
router.get(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
        const course = await getCourseById(req.params.id);
        if (course) {
            return res.status(200).json(course);
        } else {
            return res.status(404).json({ message: 'Curso não encontrado' });
        }
    })
);

// Rota para obter todos os cursos
router.get(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
        const courses = await getAllCourses();
        return res.status(200).json(courses);
    })
);

// Rota para atualizar um curso
router.put(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
        const updatedCourse = await updateCourse(req.params.id, req.body);
        if (updatedCourse) {
            return res.status(200).json(updatedCourse);
        } else {
            return res.status(404).json({ message: 'Curso não encontrado' });
        }
    })
);

// Rota para deletar um curso
router.delete(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
        const deletedCourse = await deleteCourse(req.params.id);
        if (deletedCourse) {
            return res.status(200).json({ message: 'Curso excluído com sucesso' });
        } else {
            return res.status(404).json({ message: 'Curso não encontrado' });
        }
    })
);

export default router;
