export interface User {
    id: string;
    name: string;
    birthDate: string;
    cpf: string;
    email: string;
    phone: { mobile: string; landline?: string };
    address: {
        street: string;
        number: string;
        zipCode: string;
        state: string;
        city: string;
        neighborhood: string;
    };
    nationality: string;
    pcd: boolean;
    hasDifficulty?: string;
    educationLevel: string;
    password: string;
    provisionalPassword?: string;
    profile: 'student' | 'teacher' | 'manager' | 'secretary';
}