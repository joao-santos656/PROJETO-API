export class AuthService {
    async login(email: string, password: string) {
        // Aqui você faria a validação do usuário com o banco de dados
        // Exemplo fictício:
        if (email === 'admin@admin.com' && password === 'admin123') {
            return { id: '1', name: 'Admin', email: 'admin@admin.com' };
        }
        return null;
    }

    async register(name: string, email: string, password: string) {
        // Aqui você faria a criação do usuário no banco de dados
        // Exemplo fictício de usuário registrado:
        return { id: '2', name, email };
    }
}

export const authService = new AuthService();
