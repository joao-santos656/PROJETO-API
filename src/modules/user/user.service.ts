import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(data: any) {
    const user = await prisma.user.create({
        data: {
            name: data.name,
            birthDate: new Date(data.birthDate),
            cpf: data.cpf,
            email: data.email,
            phoneMobile: data.phoneMobile,
            addressStreet: data.addressStreet,
            addressNumber: data.addressNumber,
            addressZipCode: data.addressZipCode,
            addressState: data.addressState,
            addressCity: data.addressCity,
            addressNeighborhood: data.addressNeighborhood,
            nationality: data.nationality,
            pcd: data.pcd,
            educationLevel: data.educationLevel,
            password: data.password,
            profile: data.profile,
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

export async function getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
}

export async function updateUser(id: string, data: any) {
    const user = await prisma.user.update({
        where: { id },
        data,
    });
    return user;
}

export async function deleteUser(id: string) {
    const user = await prisma.user.delete({
        where: { id },
    });
    return user;
}
