import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser() {
    const user = await prisma.user.create({
        data: {
            name: "João da Silva",
            birthDate: new Date("1990-05-10"),
            cpf: "12345678900",
            email: "joao@example.com",
            phoneMobile: "999999999",
            addressStreet: "Rua das Flores",
            addressNumber: "123",
            addressZipCode: "12345678",
            addressState: "SP",
            addressCity: "São Paulo",
            addressNeighborhood: "Centro",
            nationality: "Brasileiro",
            pcd: false,
            educationLevel: "Superior Completo",
            password: "senha123",
            profile: "student",
        },
    });

    return user;
}

export async function findUserById(id: string) {
    const user = await prisma.user.findUnique({
        where: { id },
    });

    return user;
}
