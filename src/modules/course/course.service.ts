import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Função para criar um novo curso
export async function createCourse(data: { title: string; description: string; duration: number }) {
    const course = await prisma.course.create({
        data: {
            title: data.title,
            description: data.description,
            duration: data.duration,
        },
    });
    return course;
}

// Função para buscar um curso pelo ID
export async function getCourseById(id: string) {
    const course = await prisma.course.findUnique({
        where: { id },
    });
    return course;
}

// Função para obter todos os cursos
export async function getAllCourses() {
    const courses = await prisma.course.findMany();
    return courses;
}

// Função para atualizar um curso
export async function updateCourse(id: string, data: { title?: string; description?: string; duration?: number }) {
    const updatedCourse = await prisma.course.update({
        where: { id },
        data: {
            title: data.title,
            description: data.description,
            duration: data.duration,
        },
    });
    return updatedCourse;
}

// Função para deletar um curso
export async function deleteCourse(id: string) {
    const deletedCourse = await prisma.course.delete({
        where: { id },
    });
    return deletedCourse;
}
